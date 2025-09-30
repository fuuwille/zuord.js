import { ModuleMember, ModuleSchemaMember, ModuleTypeMember, ModuleMemberKind, ModuleInterfaceMember, ModuleEnumMember, ModuleFunctionMember, ModuleVariableMember, ModuleVariantMember } from "./moduleMember.tschema";


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