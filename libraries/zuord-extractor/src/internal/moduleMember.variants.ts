import { Identifier } from "ts-morph";
import { ModuleEnumMember, ModuleExportDefaultMember, ModuleExportMember, ModuleFunctionMember, ModuleImportMember, ModuleInterfaceMember, ModuleMember, ModuleTypeMember, ModuleVariableMember } from "./moduleMember.tschema";
import { ModuleEnumNode, ModuleExportDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleTypeNode, ModuleVariableNode } from "./moduleNode.tschema";
import { isModuleSchemaLikeNode } from "./moduleNode.variants";

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

export const createModuleVariableMember = (node: ModuleVariableNode): ModuleVariableMember => {
    return new ModuleVariableMember(node);
}

export const createModuleFunctionMember = (node: ModuleFunctionNode): ModuleFunctionMember => {
    return new ModuleFunctionMember(node);
}

//

export const getModuleMemberNameNode = (member: ModuleMember): Identifier | null => {
    if(isModuleSchemaLikeNode(member.node)) {
        const nameNode = member.node.getNameNode();

        return nameNode ?? null;
    }

    return null;
}