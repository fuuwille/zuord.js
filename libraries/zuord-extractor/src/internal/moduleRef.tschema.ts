import { Identifier, TypeNode } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleFunctionNode, ModuleNode, ModuleSchemaLikeNode, ModuleVariableNode, ModuleVariantLikeNode } from "./moduleNode.tschema";

export interface ModuleRef {
    node: ModuleNode,
    typeNode?: TypeNode;
};

export interface ModuleTypeLikeRef extends ModuleRef {
    node: ModuleSchemaLikeNode;
    nameNode?: Identifier;
    typeNode?: never;
}

export interface ModuleVariantLikeRef extends ModuleRef {
    node: ModuleVariantLikeNode;
}

export interface ModuleVariableRef extends ModuleVariantLikeRef {
    node: ModuleVariableNode;
    initializer?: ModuleFunctionLikeRef;
    typeNode?: never;
}

export interface ModuleFunctionLikeRef extends ModuleRef {
    node: ModuleFunctionLikeNode;
    paramTypeNode?: TypeNode;
}

export interface ModuleFunctionRef extends ModuleVariantLikeRef, ModuleFunctionLikeRef {
    node: ModuleFunctionNode;
}