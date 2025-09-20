import { Node, SourceFile } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind } from "./moduleMember.model";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleModelNode } from "./moduleNode.variants";

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

export const extractModuleMembers = ($sourceFile: SourceFile) : ModuleModelMember[] => {
    const nodes : ModuleModelMember[] = [];

    $sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleModelMember(node);

        if (moduleNode) {
            nodes.push(moduleNode);
        }
    });

    return nodes;
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