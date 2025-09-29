import { Type } from "ts-morph";

export interface ModuleRef {
    type?: ModuleRefType;
};

export interface ModuleTypeLikeRef extends ModuleRef {
    type?: ModuleTypeLikeRefType;
}

export interface ModuleVariantLikeRef extends ModuleRef {
    type?: ModuleVariantLikeRefType;
}

export interface ModuleVariableRef extends ModuleVariantLikeRef {
    type?: ModuleVariableRefType;
}

export interface ModuleFunctionRef extends ModuleVariantLikeRef {
    type: ModuleFunctionType;
}

//

export type ModuleRefType = 
    | ModuleTypeLikeRefType
    | ModuleVariantLikeRefType;

export type ModuleTypeLikeRefType = Type;

export type ModuleVariantLikeRefType =
    | ModuleVariableRefType
    | ModuleFunctionType;

export type ModuleVariableRefType = Type;

export type ModuleFunctionType = {
    return?: Type;
    parameter?: Type;
}