import { Node } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember } from "./moduleMember.model";
import { ModuleNode } from "./moduleNode.model";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleModelNode } from "./moduleNode.variants";

export const initializeModuleMember = (
    node: Node, resolve: (node: Node) => node is ModuleNode
) : ModuleMember | null => {
    
    if(!resolve(node)) {
        return null;
    }

    const kind = getModuleMemberKind(node)!;

    return {
        node,
        kind
    };

}

export const extractModuleModelMember = ($node: Node) : ModuleModelMember | null => {
    const node = $node;
    
    if(!isModuleModelNode(node)) {
        return null;
    }

    const kind = getModuleMemberKind(node)!;

    return {
        node,
        kind
    };
};

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