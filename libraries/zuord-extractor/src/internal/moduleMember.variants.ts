import { ModuleExportDefaultMember, ModuleExportMember, ModuleImportMember } from "./moduleMember.tschema";
import { ModuleExportDefaultNode, ModuleExportNode, ModuleImportNode } from "./moduleNode.tschema";

export const createModuleImportMember = (node: ModuleImportNode): ModuleImportMember => {
    return new ModuleImportMember(node);
}

export const createModuleExportMember = (node: ModuleExportNode): ModuleExportMember => {
    return new ModuleExportMember(node);
}

export const createModuleExportDefaultMember = (node: ModuleExportDefaultNode): ModuleExportDefaultMember => {
    return new ModuleExportDefaultMember(node);
}