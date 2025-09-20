import { Node } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberInitializer } from "./moduleMember.model";
import { ModuleNode } from "./moduleNode.model";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleModelNode, isModuleVariantNode } from "./moduleNode.variants";

export const initializeModuleMember = (
    node: Node, resolve: (node: Node) => node is ModuleNode
) : ModuleMember | null => {
    
    if(!resolve(node)) {
        return null;
    }

    const moduleMember = {
        node,
        kind: getModuleMemberKind(node)!
    } as ModuleMember;

    if(moduleMember.kind === ModuleMemberKind.Variable) {
        moduleMember.initializer = ModuleMemberInitializer.Value;
    }

    return moduleMember;
}

export const extractModuleModelMember = (node: Node) : ModuleModelMember | null => {
    return initializeModuleMember(node, isModuleModelNode) as ModuleModelMember;
};

export const extractModuleVariantMember = (node: Node) : ModuleVariantMember | null => {
    return initializeModuleMember(node, isModuleVariantNode) as ModuleVariantMember;
}

export const getModuleMemberKind = (node: Node): ModuleMemberKind | undefined => {
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

    return undefined;
};