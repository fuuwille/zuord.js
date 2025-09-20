import { Node, SourceFile } from "ts-morph";
import { ModuleMember, ModuleMemberKind } from "./moduleMember.model";
import { isModuleNode, isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode } from "./moduleNode.variants";

export const extractModuleMember = (node: Node) : ModuleMember | null => {
    if(!isModuleNode(node)) {
        return null;
    }

    const declaration = node;
    const kind = getModuleMemberKind(declaration)!;

    return {
        declaration,
        kind
    };
};

export const extractModuleMembers = ($sourceFile: SourceFile) : ModuleMember[] => {
    const nodes : ModuleMember[] = [];

    $sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleMember(node);
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