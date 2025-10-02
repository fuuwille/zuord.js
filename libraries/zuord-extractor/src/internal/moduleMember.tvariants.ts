import { BindingName, Node, TypeNode } from "ts-morph";
import { ModuleMember } from "./moduleMember";
import { moduleNode } from "./moduleNode";
import { moduleMemberKind } from "./moduleMemberKind";

export const isUnknownMember = (member: ModuleMember.Base): member is ModuleMember.Unknown => {
    return member.kind === moduleMemberKind.Unknown;
}

export const isImportMember = (member: ModuleMember.Base): member is ModuleMember.Import => {
    return member.kind === moduleMemberKind.Import;
}

export const isExportMember = (member: ModuleMember.Base): member is ModuleMember.Export => {
    return member.kind === moduleMemberKind.Export;
}

export const isExportDefaultMember = (member: ModuleMember.Base): member is ModuleMember.ExportDefault => {
    return member.kind === moduleMemberKind.ExportDefault;
}

export const isTypeMember = (member: ModuleMember.Base): member is ModuleMember.Type => {
    return member.kind === moduleMemberKind.Type;
}

export const isInterfaceMember = (member: ModuleMember.Base): member is ModuleMember.Interface => {
    return member.kind === moduleMemberKind.Interface;
}

export const isVariableMember = (member: ModuleMember.Base): member is ModuleMember.Variable => {
    return member.kind === moduleMemberKind.Variable;
}

export const isFunctionMember = (member: ModuleMember.Base): member is ModuleMember.Function => {
    return member.kind === moduleMemberKind.Function;
}

export const isValueMember = (member: ModuleMember.Base): member is ModuleMember.Value => {
    return member.kind === moduleMemberKind.Value;
}

export const isArrowFunctionMember = (member: ModuleMember.Base): member is ModuleMember.ArrowFunction => {
    return member.kind === moduleMemberKind.ArrowFunction;
}

export const isFunctionExpressionMember = (member: ModuleMember.Base): member is ModuleMember.FunctionExpression => {
    return member.kind === moduleMemberKind.FunctionExpression;
}

//

export const isKnownLikeMember = (member: ModuleMember.Base): member is ModuleMember.KnownLike => {
    return isESMLikeMember(member) || isSchemaLikeMember(member) || isVariantLikeMember(member);
}

export const isESMLikeMember = (member: ModuleMember.Base): member is ModuleMember.ESMLike => {
    return isExportMember(member) || isImportMember(member) || isExportDefaultMember(member);
}

export const isDefinitionLikeMember = (member: ModuleMember.Base): member is ModuleMember.DefinitionLike => {
    return isSchemaLikeMember(member) || isVariantLikeMember(member);
}

export const isSchemaLikeMember = (member: ModuleMember.Base): member is ModuleMember.SchemaLike => {
    return isTypeMember(member) || isInterfaceMember(member);
}

export const isVariantLikeMember = (member: ModuleMember.Base): member is ModuleMember.VariantLike => {
    return isVariableMember(member) || isFunctionMember(member);
}

export const isInitializerLikeMember = (member: ModuleMember.Base): member is ModuleMember.InitializerLike => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member) || isValueMember(member);
}

export const isVariableValueMember = (member: ModuleMember.Base): member is ModuleMember.VariableValue => {
    return isVariableMember(member) && !!member.initializer && isValueMember(member.initializer);
}

export const isVariableFunctionalMember = (member: ModuleMember.Base): member is ModuleMember.VariableFunctional => {
    return isVariableMember(member) && !!member.initializer && isFunctionAltMember(member.initializer);
}

export const isFunctionLikeMember = (member: ModuleMember.Base): member is ModuleMember.FunctionLike => {
    return isFunctionMember(member) || isFunctionExpressionMember(member) || isArrowFunctionMember(member);
}

export const isFunctionAltMember = (member: ModuleMember.Base): member is ModuleMember.FunctionAlt => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member);
}

//

export  const isFunctionalMember = (member: ModuleMember.Base): member is ModuleMember.Functional => {
    return isFunctionMember(member) || isVariableFunctionalMember(member);
};

//

export const createMember = <TMember extends ModuleMember.Base>(
    node: Node
) : TMember => {

    const member = {
        node,
        kind: getMemberKind(node)
    } as TMember;

    if(isVariableMember(member)) {
        updateVariableMemberInitializer(member);
    }

    return member;
}

export const getMemberKind = (node: Node): ModuleMember.MemberKind => {
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

    if(isVariableMember(member)) {
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
                return createMember<ModuleMember.InitializerLike>(initializerNode);
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
    if(isVariableFunctionalMember(member)) {
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