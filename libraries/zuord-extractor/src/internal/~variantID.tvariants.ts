import { ModuleNode, moduleNode } from "./moduleNode";

export const extractVariantID = (node: ModuleNode.VariantLikeNode): string | undefined => {
    if(moduleNode.isFunction(node)) {
        return extractVariantIDAsFunction(node);
    }

    if(moduleNode.isVariable(node)) {
        return extractVariantIDAsVariable(node);
    }
}

export const extractVariantIDAsFunction = (node: ModuleNode.FunctionNode): string | undefined => {
    return node.getName();
}

export const extractVariantIDAsVariable = (node: ModuleNode.VariableNode): string | undefined => {
    const declaration = node.getDeclarations()[0];

    if(declaration) {
        return declaration.getName();
    }
}