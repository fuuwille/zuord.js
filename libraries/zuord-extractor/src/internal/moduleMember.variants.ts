import { ModuleTypeLikeMember, ModuleMemberKind, ModuleMember, ModuleVariantLikeMember, ModuleESMLikeMember, ModuleVariableMember, ModuleFunctionMember, ModuleEnumMember, ModuleInterfaceMember, ModuleTypeMember, ModuleExportMember, ModuleExportDefaultMember, ModuleExportLikeMember, ModuleImportMember, ModuleUnknownMember, ModuleDefinitionLikeMember } from "./moduleMember.type";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleExportNode, isModuleExportDefaultNode, isModuleImportNode } from "./moduleNode.variants";
import { ModuleNode } from "./moduleNode.type";
import { extractRef } from "./moduleRef.variants";

export const isModuleMember = (member: ModuleMember): member is ModuleMember => {
    return isModuleUnknownMember(member) || isModuleESMLikeMember(member) || isModuleDefinitionLikeMember(member);
}

export const isModuleUnknownMember = (member: ModuleMember): member is ModuleUnknownMember => {
    return member.kind === ModuleMemberKind.Unknown;
}

export const isModuleESMLikeMember = (member: ModuleMember): member is ModuleESMLikeMember => {
    return isModuleImportMember(member) || isModuleExportLikeMember(member);
}

export const isModuleImportMember = (member: ModuleMember): member is ModuleImportMember => {
    return member.kind === ModuleMemberKind.Import;
}

export const isModuleExportLikeMember = (member: ModuleMember): member is ModuleExportLikeMember => {
    return isModuleExportMember(member) || isModuleExportDefaultMember(member);
}

export const isModuleExportMember = (member: ModuleMember): member is ModuleExportMember => {
    return member.kind === ModuleMemberKind.Export;
}

export const isModuleExportDefaultMember = (member: ModuleMember): member is ModuleExportDefaultMember => {
    return member.kind === ModuleMemberKind.ExportDefault;
}

export const isModuleDefinitionLikeMember = (member: ModuleMember): member is ModuleDefinitionLikeMember => {
    return isModuleTypeLikeMember(member) || isModuleVariantLikeMember(member);
}

export const isModuleTypeLikeMember = (member: ModuleMember): member is ModuleTypeLikeMember => {
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

export const isModuleVariantLikeMember = (member: ModuleMember): member is ModuleVariantLikeMember => {
    return isModuleFunctionMember(member) || isModuleVariableMember(member);
}

export const isModuleFunctionMember = (member: ModuleMember): member is ModuleFunctionMember => {
    return member.kind === ModuleMemberKind.Function;
}

export const isModuleVariableMember = (member: ModuleMember): member is ModuleVariableMember => {
    return member.kind === ModuleMemberKind.Variable;
}

export const extractModuleMember = <TMember extends ModuleMember>(
    node: ModuleNode
) : TMember => {

    return {
        ref: extractRef(node),
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

    if (isModuleFunctionNode(node)) {
        return ModuleMemberKind.Function;
    }

    if (isModuleVariableNode(node)) {
        return ModuleMemberKind.Variable;
    }

    return ModuleMemberKind.Unknown;
};
