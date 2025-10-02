import { BindingName, Node, TypeNode } from "ts-morph";
import { ModuleMember } from "./moduleMember";
import { moduleNode } from "./moduleNode";
import { moduleMemberKind } from "./moduleMemberKind";

export const isUnknownMember = (member: ModuleMember.Member): member is ModuleMember.UnknownMember => {
    return member.kind === moduleMemberKind.Unknown;
}

export const isImportMember = (member: ModuleMember.Member): member is ModuleMember.ImportMember => {
    return member.kind === moduleMemberKind.Import;
}

export const isExportMember = (member: ModuleMember.Member): member is ModuleMember.ExportMember => {
    return member.kind === moduleMemberKind.Export;
}

export const isExportDefaultMember = (member: ModuleMember.Member): member is ModuleMember.ExportDefaultMember => {
    return member.kind === moduleMemberKind.ExportDefault;
}

export const isTypeMember = (member: ModuleMember.Member): member is ModuleMember.TypeMember => {
    return member.kind === moduleMemberKind.Type;
}

export const isInterfaceMember = (member: ModuleMember.Member): member is ModuleMember.InterfaceMember => {
    return member.kind === moduleMemberKind.Interface;
}

export const isVariableMember = (member: ModuleMember.Member): member is ModuleMember.VariableMember => {
    return member.kind === moduleMemberKind.Variable;
}

export const isFunctionMember = (member: ModuleMember.Member): member is ModuleMember.FunctionMember => {
    return member.kind === moduleMemberKind.Function;
}

export const isValueMember = (member: ModuleMember.Member): member is ModuleMember.ValueMember => {
    return member.kind === moduleMemberKind.Value;
}

export const isArrowFunctionMember = (member: ModuleMember.Member): member is ModuleMember.ArrowFunctionMember => {
    return member.kind === moduleMemberKind.ArrowFunction;
}

export const isFunctionExpressionMember = (member: ModuleMember.Member): member is ModuleMember.FunctionExpressionMember => {
    return member.kind === moduleMemberKind.FunctionExpression;
}

//

export const isKnownLikeMember = (member: ModuleMember.Member): member is ModuleMember.KnownLikeMember => {
    return isESMLikeMember(member) || isSchemaLikeMember(member) || isVariantLikeMember(member);
}

export const isESMLikeMember = (member: ModuleMember.Member): member is ModuleMember.ESMLikeMember => {
    return isExportMember(member) || isImportMember(member) || isExportDefaultMember(member);
}

export const isDefinitionLikeMember = (member: ModuleMember.Member): member is ModuleMember.DefinitionLikeMember => {
    return isSchemaLikeMember(member) || isVariantLikeMember(member);
}

export const isSchemaLikeMember = (member: ModuleMember.Member): member is ModuleMember.SchemaLikeMember => {
    return isTypeMember(member) || isInterfaceMember(member);
}

export const isVariantLikeMember = (member: ModuleMember.Member): member is ModuleMember.VariantLikeMember => {
    return isVariableMember(member) || isFunctionMember(member);
}

export const isInitializerLikeMember = (member: ModuleMember.Member): member is ModuleMember.InitializerLikeMember => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member) || isValueMember(member);
}

export const isVariableValueMember = (member: ModuleMember.Member): member is ModuleMember.VariableValueMember => {
    return isVariableMember(member) && !!member.initializer && isValueMember(member.initializer);
}

export const isVariableFunctionalMember = (member: ModuleMember.Member): member is ModuleMember.VariableFunctionalMember => {
    return isVariableMember(member) && !!member.initializer && isFunctionAltMember(member.initializer);
}

export const isFunctionLikeMember = (member: ModuleMember.Member): member is ModuleMember.FunctionLikeMember => {
    return isFunctionMember(member) || isFunctionExpressionMember(member) || isArrowFunctionMember(member);
}

export const isFunctionAltMember = (member: ModuleMember.Member): member is ModuleMember.FunctionAltMember => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member);
}

//

export  const isFunctionalMember = (member: ModuleMember.Member): member is ModuleMember.FunctionalMember => {
    return isFunctionMember(member) || isVariableFunctionalMember(member);
};

//

export const createMember = <TMember extends ModuleMember.Member>(
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
    if (moduleNode.isImportNode(node)) {
        return moduleMemberKind.Import;
    }

    if (moduleNode.isExportNode(node)) {
        return moduleMemberKind.Export;
    }

    if (moduleNode.isExportDefaultNode(node)) {
        return moduleMemberKind.ExportDefault;
    }

    if (moduleNode.isTypeNode(node)) {
        return moduleMemberKind.Type;
    }

    if (moduleNode.isInterfaceNode(node)) {
        return moduleMemberKind.Interface;
    }

    if (moduleNode.isVariableNode(node)) {
        return moduleMemberKind.Variable;
    }

    if (moduleNode.isValueNode(node)) {
        return moduleMemberKind.Value;
    }

    if (moduleNode.isFunctionNode(node)) {
        return moduleMemberKind.Function;
    }

    if (moduleNode.isArrowFunctionNode(node)) {
        return moduleMemberKind.ArrowFunction;
    }

    if (moduleNode.isFunctionExpressionNode(node)) {
        return moduleMemberKind.FunctionExpression;
    }

    return "unknown";
};

export const getDefinitionLikeMemberNameNode = (member: ModuleMember.DefinitionLikeMember): BindingName | null => {
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

export const getVariableMemberInitializer = (member: ModuleMember.VariableMember): ModuleMember.InitializerLikeMember | undefined => {
    if(!member) return undefined;

    const declaration = member.node.getDeclarations()[0];

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(moduleNode.isInitializerLikeNode(initializerNode)) {
                return createMember<ModuleMember.InitializerLikeMember>(initializerNode);
            }
        }
    }

    return undefined
}

export const getVariableValueMemberDeclaredTypeNode = (member: ModuleMember.VariableValueMember): TypeNode | undefined => {
    return member?.node?.getDeclarations()[0]?.getTypeNode();
}

export const getFunctionLikeMemberReturnTypeNode = (member: ModuleMember.FunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getReturnTypeNode();
}

export const getFunctionLikeMemberParamTypeNode = (member: ModuleMember.FunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getParameters()[0]?.getTypeNode();
}

export const getFunctionLikeMember = (member: ModuleMember.FunctionalMember) : ModuleMember.FunctionLikeMember | undefined => {
    if(isVariableFunctionalMember(member)) {
        return member.initializer!;
    }

    return member;
}

export const getFunctionalMemberReturnType = (member: ModuleMember.FunctionalMember) : TypeNode | undefined => {
    return getFunctionLikeMemberReturnTypeNode(getFunctionLikeMember(member)!);
}

export const getFunctionalMemberParamType = (member: ModuleMember.FunctionalMember) : TypeNode | undefined => {
    return getFunctionLikeMemberParamTypeNode(getFunctionLikeMember(member)!);
}

//

export const updateDefinitionLikeMemberNameNode = (member: ModuleMember.DefinitionLikeMember): void => {
    if(member.nameNode == undefined) {
        member.nameNode = getDefinitionLikeMemberNameNode(member);
    }
}

export const updateVariableMemberInitializer = (member: ModuleMember.VariableMember): void => {
    if(member.initializer == undefined) {
        member.initializer = getVariableMemberInitializer(member);
    }
}

export const updateVariableValueMemberDeclaredTypeNode = (member: ModuleMember.VariableValueMember): void => {
    if(member.declaredTypeNode == undefined) {
        member.declaredTypeNode = getVariableValueMemberDeclaredTypeNode(member);
    }
}

export const updateFunctionLikeMemberReturnTypeNode = (member: ModuleMember.FunctionLikeMember): void => {
    if(member.returnTypeNode == undefined) {
        member.returnTypeNode = getFunctionLikeMemberReturnTypeNode(member);
    }
};

export const updateFunctionLikeMemberParamTypeNode = (member: ModuleMember.FunctionLikeMember): void => {
    if(member.paramTypeNode == undefined) {
        member.paramTypeNode = getFunctionLikeMemberParamTypeNode(member);
    }
};

export const updateFunctionalMemberReturnTypeNode = (member: ModuleMember.FunctionalMember): void => {
    return updateFunctionLikeMemberReturnTypeNode(getFunctionLikeMember(member)!);
};

export const updateFunctionalMemberParamTypeNode = (member: ModuleMember.FunctionalMember): void => {
    return updateFunctionLikeMemberParamTypeNode(getFunctionLikeMember(member)!);
};