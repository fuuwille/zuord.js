import { ModuleMember, ModuleSchemaMember, ModuleTypeMember, ModuleMemberKind, ModuleInterfaceMember, ModuleEnumMember, ModuleFunctionMember, ModuleVariableMember, ModuleVariantMember, ModuleDefinitionMember, ModuleExportDefaultMember, ModuleExportMember, ModuleImportMember, ModuleESMMember } from "./moduleMember.tschema";

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