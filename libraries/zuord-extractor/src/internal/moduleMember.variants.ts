import { ModuleClassMember, ModuleEnumMember, ModuleExportDefaultMember, ModuleExportMember, ModuleImportMember, ModuleInterfaceMember, ModuleTypeMember } from "./moduleMember.tschema";
import { ModuleClassNode, ModuleEnumNode, ModuleExportDefaultNode, ModuleExportNode, ModuleImportNode, ModuleInterfaceNode, ModuleTypeNode } from "./moduleNode.tschema";

export const createModuleImportMember = (node: ModuleImportNode): ModuleImportMember => {
    return new ModuleImportMember(node);
}

export const createModuleExportMember = (node: ModuleExportNode): ModuleExportMember => {
    return new ModuleExportMember(node);
}

export const createModuleExportDefaultMember = (node: ModuleExportDefaultNode): ModuleExportDefaultMember => {
    return new ModuleExportDefaultMember(node);
}

export const createModuleTypeMember = (node: ModuleTypeNode): ModuleTypeMember => {
    return new ModuleTypeMember(node);
}

export const createModuleInterfaceMember = (node: ModuleInterfaceNode): ModuleInterfaceMember => {
    return new ModuleInterfaceMember(node);
}

export const createModuleEnumMember = (node: ModuleEnumNode): ModuleEnumMember => {
    return new ModuleEnumMember(node);
}

export const createModuleClassMember = (node: ModuleClassNode): ModuleClassMember => {
    return new ModuleClassMember(node);
}