import { ts } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleVariableNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode } from "./moduleNode.variants";

export const extractTypeID = (node: ModuleVariableNode): string | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractFunctionLikeTypeID(node);
    }

    return undefined;
}

export const extractFunctionLikeTypeID = (node: ModuleFunctionLikeNode): string | undefined => {

    const returnType = node.getReturnType();
    const constraint = returnType.getConstraint();

    const symbol = constraint 
        ? constraint.getSymbol()
        : returnType.getSymbol();

    if (symbol) {
        return symbol.getName();
    }
    else {
        const compilerNode = node.compilerNode;
        const typeNode = compilerNode.type;

        if(typeNode && ts.isTypePredicateNode(typeNode)) {
            return typeNode.getText();
        }
    }

    return undefined;
}