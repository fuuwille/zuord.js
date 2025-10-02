import { BindingName, Node, TypeNode } from "ts-morph";
import { ModuleMember } from "./moduleMember";
import { moduleNode } from "./moduleNode";
import { moduleMemberKind } from "./moduleMemberKind";

export const isUnknown = (member: ModuleMember.Base): member is ModuleMember.Unknown => {
    return member.kind === moduleMemberKind.Unknown;
}

export const isImport = (member: ModuleMember.Base): member is ModuleMember.Import => {
    return member.kind === moduleMemberKind.Import;
}

export const isExport = (member: ModuleMember.Base): member is ModuleMember.Export => {
    return member.kind === moduleMemberKind.Export;
}

export const isExportDefault = (member: ModuleMember.Base): member is ModuleMember.ExportDefault => {
    return member.kind === moduleMemberKind.ExportDefault;
}

export const isType = (member: ModuleMember.Base): member is ModuleMember.Type => {
    return member.kind === moduleMemberKind.Type;
}

export const isInterface = (member: ModuleMember.Base): member is ModuleMember.Interface => {
    return member.kind === moduleMemberKind.Interface;
}

export const isVariable = (member: ModuleMember.Base): member is ModuleMember.Variable => {
    return member.kind === moduleMemberKind.Variable;
}

export const isFunction = (member: ModuleMember.Base): member is ModuleMember.Function => {
    return member.kind === moduleMemberKind.Function;
}

export const isValue = (member: ModuleMember.Base): member is ModuleMember.Value => {
    return member.kind === moduleMemberKind.Value;
}

export const isArrowFunction = (member: ModuleMember.Base): member is ModuleMember.ArrowFunction => {
    return member.kind === moduleMemberKind.ArrowFunction;
}

export const isFunctionExpression = (member: ModuleMember.Base): member is ModuleMember.FunctionExpression => {
    return member.kind === moduleMemberKind.FunctionExpression;
}

//

export const isKnownLike = (member: ModuleMember.Base): member is ModuleMember.KnownLike => {
    return isESMLike(member) || isSchemaLike(member) || isVariantLike(member);
}

export const isESMLike = (member: ModuleMember.Base): member is ModuleMember.ESMLike => {
    return isExport(member) || isImport(member) || isExportDefault(member);
}

export const isDefinitionLike = (member: ModuleMember.Base): member is ModuleMember.DefinitionLike => {
    return isSchemaLike(member) || isVariantLike(member);
}

export const isSchemaLike = (member: ModuleMember.Base): member is ModuleMember.SchemaLike => {
    return isType(member) || isInterface(member);
}

export const isVariantLike = (member: ModuleMember.Base): member is ModuleMember.VariantLike => {
    return isVariable(member) || isFunction(member);
}

export const isInitializerLike = (member: ModuleMember.Base): member is ModuleMember.InitializerLike => {
    return isArrowFunction(member) || isFunctionExpression(member) || isValue(member);
}

export const isVariableValue = (member: ModuleMember.Base): member is ModuleMember.VariableValue => {
    return isVariable(member) && !!member.initializer && isValue(member.initializer);
}

export const isVariableFunctional = (member: ModuleMember.Base): member is ModuleMember.VariableFunctional => {
    return isVariable(member) && !!member.initializer && isFunctionAlt(member.initializer);
}

export const isFunctionLike = (member: ModuleMember.Base): member is ModuleMember.FunctionLike => {
    return isFunction(member) || isFunctionExpression(member) || isArrowFunction(member);
}

export const isFunctionAlt = (member: ModuleMember.Base): member is ModuleMember.FunctionAlt => {
    return isArrowFunction(member) || isFunctionExpression(member);
}

//

export  const isFunctional = (member: ModuleMember.Base): member is ModuleMember.Functional => {
    return isFunction(member) || isVariableFunctional(member);
};

//

export const create = <TMember extends ModuleMember.Base>(
    node: Node
) : TMember => {

    const member = {
        node,
        kind: getKind(node)
    } as TMember;

    if(isVariable(member)) {
        updateVariableMemberInitializer(member);
    }

    return member;
}

export const getKind = (node: Node): ModuleMember.MemberKind => {
    if (moduleNode.isImport(node)) {
        return moduleMemberKind.Import;
    }

    if (moduleNode.isExport(node)) {
        return moduleMemberKind.Export;
    }

    if (moduleNode.isExportDefault(node)) {
        return moduleMemberKind.ExportDefault;
    }

    if (moduleNode.isType(node)) {
        return moduleMemberKind.Type;
    }

    if (moduleNode.isInterface(node)) {
        return moduleMemberKind.Interface;
    }

    if (moduleNode.isVariable(node)) {
        return moduleMemberKind.Variable;
    }

    if (moduleNode.isValue(node)) {
        return moduleMemberKind.Value;
    }

    if (moduleNode.isFunction(node)) {
        return moduleMemberKind.Function;
    }

    if (moduleNode.isArrowFunction(node)) {
        return moduleMemberKind.ArrowFunction;
    }

    if (moduleNode.isFunctionExpression(node)) {
        return moduleMemberKind.FunctionExpression;
    }

    return "unknown";
};

export const getDefinitionLikeMemberNameNode = (member: ModuleMember.DefinitionLike): BindingName | null => {
    if("getNameNode" in member.node) {
        return member.node.getNameNode() ?? null;
    }

    if(isVariable(member)) {
        const declaration = member.node.getDeclarations()[0];

        if(declaration) {
            return declaration.getNameNode() ?? null;
        }
    }

    return null;
}

export const getVariableMemberInitializer = (member: ModuleMember.Variable): ModuleMember.InitializerLike | undefined => {
    if(!member) return undefined;

    const declaration = member.node.getDeclarations()[0];

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(moduleNode.isInitializerLike(initializerNode)) {
                return create<ModuleMember.InitializerLike>(initializerNode);
            }
        }
    }

    return undefined
}

export const getVariableValueMemberDeclaredTypeNode = (member: ModuleMember.VariableValue): TypeNode | undefined => {
    return member?.node?.getDeclarations()[0]?.getTypeNode();
}

export const getFunctionLikeMemberReturnTypeNode = (member: ModuleMember.FunctionLike): TypeNode | undefined => {
    return member?.node?.getReturnTypeNode();
}

export const getFunctionLikeMemberParamTypeNode = (member: ModuleMember.FunctionLike): TypeNode | undefined => {
    return member?.node?.getParameters()[0]?.getTypeNode();
}

export const getFunctionLikeMember = (member: ModuleMember.Functional) : ModuleMember.FunctionLike | undefined => {
    if(isVariableFunctional(member)) {
        return member.initializer!;
    }

    return member;
}

export const getFunctionalMemberReturnType = (member: ModuleMember.Functional) : TypeNode | undefined => {
    return getFunctionLikeMemberReturnTypeNode(getFunctionLikeMember(member)!);
}

export const getFunctionalMemberParamType = (member: ModuleMember.Functional) : TypeNode | undefined => {
    return getFunctionLikeMemberParamTypeNode(getFunctionLikeMember(member)!);
}

//

export const updateDefinitionLikeMemberNameNode = (member: ModuleMember.DefinitionLike): void => {
    if(member.nameNode == undefined) {
        member.nameNode = getDefinitionLikeMemberNameNode(member);
    }
}

export const updateVariableMemberInitializer = (member: ModuleMember.Variable): void => {
    if(member.initializer == undefined) {
        member.initializer = getVariableMemberInitializer(member);
    }
}

export const updateVariableValueMemberDeclaredTypeNode = (member: ModuleMember.VariableValue): void => {
    if(member.declaredTypeNode == undefined) {
        member.declaredTypeNode = getVariableValueMemberDeclaredTypeNode(member);
    }
}

export const updateFunctionLikeMemberReturnTypeNode = (member: ModuleMember.FunctionLike): void => {
    if(member.returnTypeNode == undefined) {
        member.returnTypeNode = getFunctionLikeMemberReturnTypeNode(member);
    }
};

export const updateFunctionLikeMemberParamTypeNode = (member: ModuleMember.FunctionLike): void => {
    if(member.paramTypeNode == undefined) {
        member.paramTypeNode = getFunctionLikeMemberParamTypeNode(member);
    }
};

export const updateFunctionalMemberReturnTypeNode = (member: ModuleMember.Functional): void => {
    return updateFunctionLikeMemberReturnTypeNode(getFunctionLikeMember(member)!);
};

export const updateFunctionalMemberParamTypeNode = (member: ModuleMember.Functional): void => {
    return updateFunctionLikeMemberParamTypeNode(getFunctionLikeMember(member)!);
};