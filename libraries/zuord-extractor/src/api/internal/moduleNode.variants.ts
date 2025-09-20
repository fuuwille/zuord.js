import { Node, SourceFile } from "ts-morph";
import { ModuleNode, ModuleNodeKind } from "./moduleNode.model";

export const extractModuleNode = (node: Node) : ModuleNode => {
    const source = node;
    const kind = getModuleNodeKind(node);

    return {
        source,
        kind
    };
};

export const extractModuleNodes = ($sourceFile: SourceFile) : ModuleNode[] => {
    const nodes : ModuleNode[] = [];
    
    $sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleNode(node);
        nodes.push(moduleNode);
    });

    return nodes;
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