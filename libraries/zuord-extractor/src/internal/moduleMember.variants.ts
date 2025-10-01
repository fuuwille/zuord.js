import { BindingName, Node, TypeNode } from "ts-morph";
import { ModuleMember } from "./moduleMember";
import { moduleNode } from "./moduleNode";


export const isESMMember = (member: ModuleMember.BaseMember): member is ModuleMember.ESMMember => {
    return isExportMember(member) || isImportMember(member) || isExportDefaultMember(member);
}

export const isImportMember = (member: ModuleMember.BaseMember): member is ModuleMember.ImportMember => {
    return member.kind === ModuleMember.MemberKind.Import;
}

export const isExportMember = (member: ModuleMember.BaseMember): member is ModuleMember.ExportMember => {
    return member.kind === ModuleMember.MemberKind.Export;
}

export const isExportDefaultMember = (member: ModuleMember.BaseMember): member is ModuleMember.ExportDefaultMember => {
    return member.kind === ModuleMember.MemberKind.ExportDefault;
}

export const isSchemaMember = (member: ModuleMember.BaseMember): member is ModuleMember.SchemaMember => {
    return isTypeMember(member) || isInterfaceMember(member) || isEnumMember(member);
}

export const isTypeMember = (member: ModuleMember.BaseMember): member is ModuleMember.TypeMember => {
    return member.kind === ModuleMember.MemberKind.Type;
}

export const isInterfaceMember = (member: ModuleMember.BaseMember): member is ModuleMember.InterfaceMember => {
    return member.kind === ModuleMember.MemberKind.Interface;
}

export const isEnumMember = (member: ModuleMember.BaseMember): member is ModuleMember.EnumMember => {
    return member.kind === ModuleMember.MemberKind.Enum;
}

export const isVariantMember = (member: ModuleMember.BaseMember): member is ModuleMember.VariantMember => {
    return isVariableMember(member) || isFunctionMember(member);
}

export const isVariableMember = (member: ModuleMember.BaseMember): member is ModuleMember.VariableMember => {
    return member.kind === ModuleMember.MemberKind.Variable;
}

export const isFunctionMember = (member: ModuleMember.BaseMember): member is ModuleMember.FunctionMember => {
    return member.kind === ModuleMember.MemberKind.Function;
}

export const isInitializerMember = (member: ModuleMember.BaseMember): member is ModuleMember.InitializerMember => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member);
}

export const isArrowFunctionMember = (member: ModuleMember.BaseMember): member is ModuleMember.ArrowFunctionMember => {
    return member.kind === ModuleMember.MemberKind.ArrowFunction;
}

export const isFunctionExpressionMember = (member: ModuleMember.BaseMember): member is ModuleMember.FunctionExpressionMember => {
    return member.kind === ModuleMember.MemberKind.FunctionExpression;
}

//

export const isKnownMember = (member: ModuleMember.BaseMember): member is ModuleMember.KnownMember => {
    return isESMMember(member) || isSchemaMember(member) || isVariantMember(member);
}

export const isDefinitionLikeMember = (member: ModuleMember.BaseMember): member is ModuleMember.DefinitionLikeMember => {
    return isSchemaMember(member) || isVariantMember(member);
}

export const isVariableFunctionMember = (member: ModuleMember.BaseMember): member is ModuleMember.VariableFunctionMember => {
    return isVariableMember(member) && !!member.initializer && isFunctionAltMember(member.initializer);
}

export const isFunctionLikeMember = (member: ModuleMember.BaseMember): member is ModuleMember.FunctionLikeMember => {
    return isFunctionMember(member) || isFunctionExpressionMember(member) || isArrowFunctionMember(member);
}

export const isFunctionAltMember = (member: ModuleMember.BaseMember): member is ModuleMember.FunctionAltMember => {
    return isArrowFunctionMember(member) || isFunctionExpressionMember(member);
}

//

export  const isFunctionalMember = (member: ModuleMember.BaseMember): member is ModuleMember.FunctionalMember => {
    return isFunctionMember(member) || isVariableFunctionMember(member);
};

//

export const createMember = <TMember extends ModuleMember.BaseMember>(
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

export const getMemberKind = (node: Node): ModuleMember.MemberKind => {
    if (moduleNode.isImportNode(node)) {
        return ModuleMember.MemberKind.Import;
    }

    if (moduleNode.isExportNode(node)) {
        return ModuleMember.MemberKind.Export;
    }

    if (moduleNode.isExportDefaultNode(node)) {
        return ModuleMember.MemberKind.ExportDefault;
    }

    if (moduleNode.isTypeNode(node)) {
        return ModuleMember.MemberKind.Type;
    }

    if (moduleNode.isInterfaceNode(node)) {
        return ModuleMember.MemberKind.Interface;
    }

    if (moduleNode.isEnumNode(node)) {
        return ModuleMember.MemberKind.Enum;
    }

    if (moduleNode.isVariableNode(node)) {
        return ModuleMember.MemberKind.Variable;
    }

    if (moduleNode.isFunctionNode(node)) {
        return ModuleMember.MemberKind.Function;
    }

    if (moduleNode.isArrowFunctionNode(node)) {
        return ModuleMember.MemberKind.ArrowFunction;
    }

    if (moduleNode.isFunctionExpressionNode(node)) {
        return ModuleMember.MemberKind.FunctionExpression;
    }

    return ModuleMember.MemberKind.Unknown;
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

export const getVariableMemberInitializer = (member: ModuleMember.VariableMember): ModuleMember.InitializerMember | undefined => {
    if(!member) return undefined;

    const declaration = member.node.getDeclarations()[0];

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(moduleNode.isInitializerNode(initializerNode)) {
                return createMember<ModuleMember.InitializerMember>(initializerNode);
            }
        }
    }

    return undefined
}

export const getFunctionLikeMemberReturnTypeNode = (member: ModuleMember.FunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getReturnTypeNode();
}

export const getFunctionLikeMemberParamTypeNode = (member: ModuleMember.FunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getParameters()[0]?.getTypeNode();
}

export const getFunctionLikeMember = (member: ModuleMember.FunctionalMember) : ModuleMember.FunctionLikeMember | undefined => {
    if(isVariableFunctionMember(member)) {
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