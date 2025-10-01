import { BindingName, Node, TypeNode } from "ts-morph";
import { BaseMember, SchemaMember, TypeMember, MemberKind, InterfaceMember, EnumMember, FunctionMember, VariableMember, VariantMember, DefinitionLikeMember, ExportDefaultMember, ExportMember, ImportMember, ESMMember, InitializerMember, FunctionExpressionMember, ArrowFunctionMember, FunctionLikeMember, KnownMember, VariableFunctionMember, FunctionAltMember, FunctionalMember } from "./moduleMember.tschema";
import { isModuleImportNode, isModuleExportNode, isModuleExportDefaultNode, isModuleTypeNode, isModuleInterfaceNode, isModuleEnumNode, isModuleFunctionNode, isModuleVariableNode, isModuleInitializerNode, isModuleArrowFunctionNode, isModuleFunctionExpressionNode } from "./moduleNode.variants";

export const isESMMember = (member: BaseMember): member is ESMMember => {
    return isExportMember(member) || isImportMember(member) || isExportDefaultMember(member);
}

export const isImportMember = (member: BaseMember): member is ImportMember => {
    return member.kind === MemberKind.Import;
}

export const isExportMember = (member: BaseMember): member is ExportMember => {
    return member.kind === MemberKind.Export;
}

export const isExportDefaultMember = (member: BaseMember): member is ExportDefaultMember => {
    return member.kind === MemberKind.ExportDefault;
}

export const isSchemaMember = (member: BaseMember): member is SchemaMember => {
    return isTypeMember(member) || isInterfaceMember(member) || isEnumMember(member);
}

export const isTypeMember = (member: BaseMember): member is TypeMember => {
    return member.kind === MemberKind.Type;
}

export const isInterfaceMember = (member: BaseMember): member is InterfaceMember => {
    return member.kind === MemberKind.Interface;
}

export const isEnumMember = (member: BaseMember): member is EnumMember => {
    return member.kind === MemberKind.Enum;
}

export const isVariantMember = (member: BaseMember): member is VariantMember => {
    return isVariableMember(member) || isFunctionMember(member);
}

export const isVariableMember = (member: BaseMember): member is VariableMember => {
    return member.kind === MemberKind.Variable;
}

export const isFunctionMember = (member: BaseMember): member is FunctionMember => {
    return member.kind === MemberKind.Function;
}

export const isInitializerMember = (member: BaseMember): member is InitializerMember => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member);
}

export const isArrowFunctionMember = (member: BaseMember): member is ArrowFunctionMember => {
    return member.kind === MemberKind.ArrowFunction;
}

export const isFunctionExpressionMember = (member: BaseMember): member is FunctionExpressionMember => {
    return member.kind === MemberKind.FunctionExpression;
}

//

export const isKnownMember = (member: BaseMember): member is KnownMember => {
    return isESMMember(member) || isSchemaMember(member) || isVariantMember(member);
}

export const isDefinitionLikeMember = (member: BaseMember): member is DefinitionLikeMember => {
    return isSchemaMember(member) || isVariantMember(member);
}

export const isVariableFunctionMember = (member: BaseMember): member is VariableFunctionMember => {
    return isVariableMember(member) && !!member.initializer && isFunctionAltMember(member.initializer);
}

export const isFunctionLikeMember = (member: BaseMember): member is FunctionLikeMember => {
    return isFunctionMember(member) || isFunctionExpressionMember(member) || isArrowFunctionMember(member);
}

export const isFunctionAltMember = (member: BaseMember): member is FunctionAltMember => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member);
}

//

export  const isFunctionalMember = (member: BaseMember): member is FunctionalMember => {
    return isFunctionMember(member) || isVariableFunctionMember(member);
};

//

export const createMember = <TMember extends BaseMember>(
    node: Node
) : TMember => {

    const member = {
        node,
        kind: getMemberKind(node)
    } as TMember;

    if(isVariableMember(member)) {
        member.initializer = getVariableMemberInitializer(member);
    }

    return member;
}

export const getMemberKind = (node: Node): MemberKind => {
    if (isModuleImportNode(node)) {
        return MemberKind.Import;
    }

    if (isModuleExportNode(node)) {
        return MemberKind.Export;
    }

    if (isModuleExportDefaultNode(node)) {
        return MemberKind.ExportDefault;
    }

    if (isModuleTypeNode(node)) {
        return MemberKind.Type;
    }

    if (isModuleInterfaceNode(node)) {
        return MemberKind.Interface;
    }

    if (isModuleEnumNode(node)) {
        return MemberKind.Enum;
    }

    if (isModuleVariableNode(node)) {
        return MemberKind.Variable;
    }

    if (isModuleFunctionNode(node)) {
        return MemberKind.Function;
    }

    if (isModuleArrowFunctionNode(node)) {
        return MemberKind.ArrowFunction;
    }

    if (isModuleFunctionExpressionNode(node)) {
        return MemberKind.FunctionExpression;
    }

    return MemberKind.Unknown;
};

export const getDefinitionLikeMemberNameNode = (member: DefinitionLikeMember): BindingName | null => {
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

export const getVariableMemberInitializer = (member: VariableMember): InitializerMember | undefined => {
    if(!member) return undefined;

    const declaration = member.node.getDeclarations()[0];

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(isModuleInitializerNode(initializerNode)) {
                return createMember<InitializerMember>(initializerNode);
            }
        }
    }

    return undefined
}

export const getFunctionLikeMemberReturnTypeNode = (member: FunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getReturnTypeNode();
}

export const getFunctionLikeMemberParamTypeNode = (member: FunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getParameters()[0]?.getTypeNode();
}

export const getFunctionLikeMember = (member: FunctionalMember) : FunctionLikeMember | undefined => {
    if(isVariableFunctionMember(member)) {
        return member.initializer!;
    }

    return member;
}

export const getFunctionalMemberReturnType = (member: FunctionalMember) : TypeNode | undefined => {
    return getFunctionLikeMemberReturnTypeNode(getFunctionLikeMember(member)!);
}

export const getFunctionalMemberParamType = (member: FunctionalMember) : TypeNode | undefined => {
    return getFunctionLikeMemberParamTypeNode(getFunctionLikeMember(member)!);
}

//

export const updateDefinitionLikeMemberNameNode = (member: DefinitionLikeMember): void => {
    if(member.nameNode == undefined) {
        member.nameNode = getDefinitionLikeMemberNameNode(member);
    }
}

export const updateFunctionLikeMemberReturnTypeNode = (member: FunctionLikeMember): void => {
    if(member.returnTypeNode == undefined) {
        member.returnTypeNode = getFunctionLikeMemberReturnTypeNode(member);
    }
};

export const updateFunctionLikeMemberParamTypeNode = (member: FunctionLikeMember): void => {
    if(member.paramTypeNode == undefined) {
        member.paramTypeNode = getFunctionLikeMemberParamTypeNode(member);
    }
};

export const updateFunctionalMemberReturnTypeNode = (member: FunctionalMember): void => {
    return updateFunctionLikeMemberReturnTypeNode(getFunctionLikeMember(member)!);
};

export const updateFunctionalMemberParamTypeNode = (member: FunctionalMember): void => {
    return updateFunctionLikeMemberParamTypeNode(getFunctionLikeMember(member)!);
};