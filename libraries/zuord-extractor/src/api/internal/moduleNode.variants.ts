import { Node, SourceFile } from "ts-morph";
import { ModuleNode, ModuleNodeKind } from "./moduleNode.model";
import { isModuleDeclaration, isModuleEnumDeclaration, isModuleFunctionDeclaration, isModuleTypeDeclaration, isModuleVariableDeclaration, isModuleInterfaceDeclaration } from "./moduleDeclaration.variants";

export const extractModuleNode = (node: Node) : ModuleNode | null => {
    if(!isModuleDeclaration(node)) {
        return null;
    }

    const declaration = node;
    const kind = getModuleNodeKind(declaration);

    return {
        declaration,
        kind
    };
};

export const extractModuleNodes = ($sourceFile: SourceFile) : ModuleNode[] => {
    const nodes : ModuleNode[] = [];

    $sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleNode(node);

        if (moduleNode) {
            nodes.push(moduleNode);
        }
    });

    return nodes;
};

export const getModuleNodeKind = (node: Node): ModuleNodeKind => {
    if (isModuleTypeDeclaration(node)) {
        return ModuleNodeKind.Type;
    }

    if (isModuleInterfaceDeclaration(node)) {
        return ModuleNodeKind.Interface;
    }

    if (isModuleEnumDeclaration(node)) {
        return ModuleNodeKind.Enum;
    }

    if (isModuleFunctionDeclaration(node)) {
        return ModuleNodeKind.Function;
    }

    if (isModuleVariableDeclaration(node)) {
        return ModuleNodeKind.Variable;
    }

    return ModuleNodeKind.Unknown;
};