import { Node } from "ts-morph";
import { ModuleNode, ModuleNodeKind } from "./moduleNode.model";

export const extractModuleNode = (node: Node) : ModuleNode => {
    const source = node;
    const kind = getModuleNodeKind(node);

    return {
        source,
        kind
    };
};

export const getModuleNodeKind = (node: Node): ModuleNodeKind => {
    if (Node.isTypeAliasDeclaration(node)) {
        return ModuleNodeKind.Type;
    }

    if (Node.isInterfaceDeclaration(node)) {
        return ModuleNodeKind.Interface;
    }

    if (Node.isEnumDeclaration(node)) {
        return ModuleNodeKind.Enum;
    }

    if (Node.isFunctionDeclaration(node)) {
        return ModuleNodeKind.Function;
    }

    if (Node.isVariableDeclaration(node)) {
        return ModuleNodeKind.Variable;
    }

    return ModuleNodeKind.Unknown;
};