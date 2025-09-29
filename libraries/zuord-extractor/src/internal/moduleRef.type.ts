import { TypeNode } from "ts-morph";

export interface ModuleRef {
    typeNode?: TypeNode;
};

export interface ModuleTypeLikeRef extends ModuleRef {
    typeNode?: TypeNode;
}

export interface ModuleVariantLikeRef extends ModuleRef {
    typeNode?: TypeNode;
}

export interface ModuleVariableRef extends ModuleVariantLikeRef {
    typeNode?: TypeNode;
}

export interface ModuleFunctionRef extends ModuleVariantLikeRef {
    typeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}