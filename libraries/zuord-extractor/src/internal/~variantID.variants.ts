import { ModuleFunctionNode, ModuleVariableNode, ModuleVariantNode } from "./moduleNode.tschema";
import { isModuleFunctionNode, isModuleVariableNode } from "./moduleNode.variants";

export const extractVariantID = (node: ModuleVariantNode): string | undefined => {
    if(isModuleFunctionNode(node)) {
        return extractVariantIDAsFunction(node);
    }

    if(isModuleVariableNode(node)) {
        return extractVariantIDAsVariable(node);
    }
}

export const extractVariantIDAsFunction = (node: ModuleFunctionNode): string | undefined => {
    return node.getName();
}

export const extractVariantIDAsVariable = (node: ModuleVariableNode): string | undefined => {
    const declaration = node.getDeclarations()[0];

    if(declaration) {
        return declaration.getName();
    }
}