import { ModuleMember, ModuleSchemaMember, ModuleTypeMember, ModuleMemberKind, ModuleInterfaceMember, ModuleEnumMember, ModuleFunctionMember, ModuleVariableMember, ModuleVariantMember, ModuleDefinitionMember, ModuleDefaultMember, ModuleExportMember, ModuleImportMember, ModuleESMMember, ModuleInitializerMember } from "./moduleMember.tschema";
import { ModuleNode } from "./moduleNode.tschema";
import { isModuleImportNode, isModuleExportNode, isModuleDefaultNode, isModuleTypeNode, isModuleInterfaceNode, isModuleEnumNode, isModuleFunctionNode, isModuleVariableNode, isModuleInitializerNode } from "./moduleNode.variants";

export const isModuleESMMember = (member: ModuleMember): member is ModuleESMMember => {
    return isModuleExportMember(member) || isModuleImportMember(member) || isModuleDefaultMember(member);
}

export const isModuleImportMember = (member: ModuleMember): member is ModuleImportMember => {
    return member.kind === ModuleMemberKind.Import;
}

export const isModuleExportMember = (member: ModuleMember): member is ModuleExportMember => {
    return member.kind === ModuleMemberKind.Export;
}

export const isModuleDefaultMember = (member: ModuleMember): member is ModuleDefaultMember => {
    return member.kind === ModuleMemberKind.Default;
}

export const isModuleDefinitionMember = (member: ModuleMember): member is ModuleDefinitionMember => {
    return isModuleSchemaMember(member) || isModuleVariantMember(member);
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

export const createModuleMember = <TMember extends ModuleMember>(
    node: ModuleNode
) : TMember => {

    return {
        node,
        kind: getModuleMemberKind(node)
    } as TMember;
}

export const getModuleMemberKind = (node: ModuleNode): ModuleMemberKind => {
    if (isModuleImportNode(node)) {
        return ModuleMemberKind.Import;
    }

    if (isModuleExportNode(node)) {
        return ModuleMemberKind.Export;
    }

    if (isModuleDefaultNode(node)) {
        return ModuleMemberKind.Default;
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

    if (isModuleFunctionNode(node)) {
        return ModuleMemberKind.Function;
    }

    if (isModuleVariableNode(node)) {
        return ModuleMemberKind.Variable;
    }

    return ModuleMemberKind.Unknown;
};

export const getModuleInitializerMember = (member: ModuleVariableMember): ModuleInitializerMember | undefined => {
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