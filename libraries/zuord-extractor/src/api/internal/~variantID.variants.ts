import { ModuleFunctionNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionNode } from "./moduleNode.variants";

export const extractVariantID = (node: ModuleVariantLikeNode): string | undefined => {
    if(isModuleFunctionNode(node)) {
        return extractVariantIDFromFunction(node);
    }
}

export const extractVariantIDFromFunction = (node: ModuleFunctionNode): string | undefined => {
    return node.getName();
}