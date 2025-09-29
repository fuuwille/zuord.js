import { TypeNode } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleFunctionNode, ModuleNode, ModuleTypeLikeNode, ModuleVariableNode, ModuleVariantLikeNode } from "./moduleNode.type";

export interface ModuleRef {
    node: ModuleNode,
    typeNode?: TypeNode;
};

export interface ModuleTypeLikeRef extends ModuleRef {
    node: ModuleTypeLikeNode;
    typeNode?: TypeNode;
}

export interface ModuleVariantLikeRef extends ModuleRef {
    node: ModuleVariantLikeNode;
    typeNode?: TypeNode;
}

export interface ModuleVariableRef extends ModuleVariantLikeRef {
    node: ModuleVariableNode;
    typeNode?: TypeNode;
}

export interface ModuleFunctionLikeRef extends ModuleRef {
    node: ModuleFunctionLikeNode;
    typeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}


export interface ModuleFunctionRef extends ModuleVariantLikeRef, ModuleFunctionLikeRef {
    node: ModuleFunctionNode;
    typeNode?: TypeNode;
}