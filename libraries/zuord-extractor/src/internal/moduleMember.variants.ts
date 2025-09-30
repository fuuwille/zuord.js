import { BindingName, Identifier, TypeNode } from "ts-morph";
import { ModuleMember, ModuleSchemaMember, ModuleTypeMember, ModuleMemberKind, ModuleInterfaceMember, ModuleEnumMember, ModuleFunctionMember, ModuleVariableMember, ModuleVariantMember, ModuleDefinitionLikeMember, ModuleExportDefaultMember, ModuleExportMember, ModuleImportMember, ModuleESMMember, ModuleInitializerMember, ModuleFunctionExpressionMember, ModuleArrowFunctionMember, ModuleFunctionLikeMember, ModuleKnownMember, ModuleVariableFunctionMember, ModuleFunctionAltMember } from "./moduleMember.tschema";
import { ModuleNode } from "./moduleNode.tschema";
import { isModuleImportNode, isModuleExportNode, isModuleExportDefaultNode, isModuleTypeNode, isModuleInterfaceNode, isModuleEnumNode, isModuleFunctionNode, isModuleVariableNode, isModuleInitializerNode, isModuleArrowFunctionNode, isModuleFunctionExpressionNode } from "./moduleNode.variants";

export const isModuleESMMember = (member: ModuleMember): member is ModuleESMMember => {
    return isModuleExportMember(member) || isModuleImportMember(member) || isModuleExportDefaultMember(member);
}

export const isModuleImportMember = (member: ModuleMember): member is ModuleImportMember => {
    return member.kind === ModuleMemberKind.Import;
}

export const isModuleExportMember = (member: ModuleMember): member is ModuleExportMember => {
    return member.kind === ModuleMemberKind.Export;
}

export const isModuleExportDefaultMember = (member: ModuleMember): member is ModuleExportDefaultMember => {
    return member.kind === ModuleMemberKind.ExportDefault;
}

export const isModuleSchemaMember = (member: ModuleMember): member is ModuleSchemaMember => {
    return isModuleTypeMember(member) || isModuleInterfaceMember(member) || isModuleEnumMember(member);
}

export const isModuleTypeMember = (member: ModuleMember): member is ModuleTypeMember => {
    return member.kind === ModuleMemberKind.Type;
}

export const isModuleInterfaceMember = (member: ModuleMember): member is ModuleInterfaceMember => {
    return member.kind === ModuleMemberKind.Interface;
}

export const isModuleEnumMember = (member: ModuleMember): member is ModuleEnumMember => {
    return member.kind === ModuleMemberKind.Enum;
}

export const isModuleVariantMember = (member: ModuleMember): member is ModuleVariantMember => {
    return isModuleVariableMember(member) || isModuleFunctionMember(member);
}

export const isModuleVariableMember = (member: ModuleMember): member is ModuleVariableMember => {
    return member.kind === ModuleMemberKind.Variable;
}

export const isModuleFunctionMember = (member: ModuleMember): member is ModuleFunctionMember => {
    return member.kind === ModuleMemberKind.Function;
}

export const isModuleInitializerMember = (member: ModuleMember): member is ModuleInitializerMember => {
    return isModuleArrowFunctionMember(member) || isModuleFunctionExpressionMember(member);
}

export const isModuleArrowFunctionMember = (member: ModuleMember): member is ModuleArrowFunctionMember => {
    return member.kind === ModuleMemberKind.ArrowFunction;
}

export const isModuleFunctionExpressionMember = (member: ModuleMember): member is ModuleFunctionExpressionMember => {
    return member.kind === ModuleMemberKind.FunctionExpression;
}

//

export const isModuleKnownMember = (member: ModuleMember): member is ModuleKnownMember => {
    return isModuleESMMember(member) || isModuleSchemaMember(member) || isModuleVariantMember(member);
}

export const isModuleDefinitionLikeMember = (member: ModuleMember): member is ModuleDefinitionLikeMember => {
    return isModuleSchemaMember(member) || isModuleVariantMember(member);
}


export const isModuleVariableFunctionMember = (member: ModuleMember): member is ModuleVariableFunctionMember => {
    return isModuleVariableMember(member) && !!member.initializer && isModuleFunctionAltMember(member.initializer);
}

export const isModuleFunctionLikeMember = (member: ModuleMember): member is ModuleFunctionLikeMember => {
    return isModuleFunctionMember(member) || isModuleFunctionExpressionMember(member) || isModuleArrowFunctionMember(member);
}

export const isModuleFunctionAltMember = (member: ModuleMember): member is ModuleFunctionAltMember => {
    return isModuleArrowFunctionMember(member) || isModuleFunctionExpressionMember(member);
}

//

export const createModuleMember = <TMember extends ModuleMember>(
    node: ModuleNode
) : TMember => {

    const member = {
        node,
        kind: getModuleMemberKind(node)
    } as TMember;

    if(isModuleVariableMember(member)) {
        member.initializer = getModuleVariableMemberInitializer(member);
    }

    return member;
}

export const getModuleMemberKind = (node: ModuleNode): ModuleMemberKind => {
    if (isModuleImportNode(node)) {
        return ModuleMemberKind.Import;
    }

    if (isModuleExportNode(node)) {
        return ModuleMemberKind.Export;
    }

    if (isModuleExportDefaultNode(node)) {
        return ModuleMemberKind.ExportDefault;
    }

    if (isModuleTypeNode(node)) {
        return ModuleMemberKind.Type;
    }

    if (isModuleInterfaceNode(node)) {
        return ModuleMemberKind.Interface;
    }

    if (isModuleEnumNode(node)) {
        return ModuleMemberKind.Enum;
    }

    if (isModuleVariableNode(node)) {
        return ModuleMemberKind.Variable;
    }

    if (isModuleFunctionNode(node)) {
        return ModuleMemberKind.Function;
    }

    if (isModuleArrowFunctionNode(node)) {
        return ModuleMemberKind.ArrowFunction;
    }

    if (isModuleFunctionExpressionNode(node)) {
        return ModuleMemberKind.FunctionExpression;
    }

    return ModuleMemberKind.Unknown;
};

export const getModuleDefinitionLikeMemberNameNode = (member: ModuleDefinitionLikeMember): BindingName | null => {
    if("getNameNode" in member.node) {
        return member.node.getNameNode() ?? null;
    }

    if(isModuleVariableMember(member)) {
        const declaration = member.node.getDeclarations()[0];

        if(declaration) {
            return declaration.getNameNode() ?? null;
        }
    }

    return null;
}

export const getModuleVariableMemberInitializer = (member: ModuleVariableMember): ModuleInitializerMember | undefined => {
    if(!member) return undefined;

    const declaration = member.node.getDeclarations()[0];

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(isModuleInitializerNode(initializerNode)) {
                return createModuleMember<ModuleInitializerMember>(initializerNode);
            }
        }
    }

    return undefined
}

export const getModuleFunctionLikeMemberReturnTypeNode = (member: ModuleFunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getReturnTypeNode();
}

export const getModuleFunctionLikeMemberParamTypeNode = (member: ModuleFunctionLikeMember): TypeNode | undefined => {
    return member?.node?.getParameters()[0]?.getTypeNode();
}

//

export const updateModuleDefinitionLikeMemberNameNode = (member: ModuleDefinitionLikeMember): void => {
    if(member.nameNode == undefined) {
        member.nameNode = getModuleDefinitionLikeMemberNameNode(member);
    }
}

export const updateModuleFunctionLikeMemberReturnTypeNode = (member: ModuleFunctionLikeMember): void => {
    if(member.returnTypeNode == undefined) {
        member.returnTypeNode = getModuleFunctionLikeMemberReturnTypeNode(member);
    }
};

export const updateModuleFunctionLikeMemberParamTypeNode = (member: ModuleFunctionLikeMember): void => {
    if(member.paramTypeNode == undefined) {
        member.paramTypeNode = getModuleFunctionLikeMemberParamTypeNode(member);
    }
};