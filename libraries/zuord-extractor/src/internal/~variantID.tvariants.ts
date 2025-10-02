import { ModuleNode, moduleNode } from "./moduleNode";

export const extractVariantID = (node: ModuleNode.VariantLike): string | undefined => {
    if(moduleNode.isFunction(node)) {
        return extractVariantIDAsFunction(node);
    }

    if(moduleNode.isVariable(node)) {
        return extractVariantIDAsVariable(node);
    }
}

export const extractVariantIDAsFunction = (node: ModuleNode.Function): string | undefined => {
    return node.getName();
}

export const extractVariantIDAsVariable = (node: ModuleNode.Variable): string | undefined => {
    const declaration = node.getDeclarations()[0];

    if(declaration) {
        return declaration.getName();
    }
}