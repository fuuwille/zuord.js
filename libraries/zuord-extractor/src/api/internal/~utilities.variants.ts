import { ModuleFunctionLikeNode, ModuleVariableNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode } from "./moduleNode.variants";

export const extractTypeID = (node: ModuleVariableNode): string | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractFunctionLikeTypeID(node);
    }

    return undefined;
}

export const extractFunctionLikeTypeID = (node: ModuleFunctionLikeNode): string | undefined => {
    return undefined;
}