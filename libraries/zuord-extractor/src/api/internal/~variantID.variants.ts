import { ModuleFunctionNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionNode } from "./moduleNode.variants";

export const extractVariantID = (node: ModuleVariantLikeNode): string | undefined => {
    if(isModuleFunctionNode(node)) {
        return extractVariantIDAsFunction(node);
    }
}

export const extractVariantIDAsFunction = (node: ModuleFunctionNode): string | undefined => {
    return node.getName();
}