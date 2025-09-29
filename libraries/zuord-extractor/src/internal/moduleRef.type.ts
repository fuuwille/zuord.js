import { Type } from "ts-morph";

export interface ModuleRef {
    type?: ModuleRefType;
};

export interface ModuleTypeLikeRef extends ModuleRef {
    type?: ModuleTypeLikeRefType;
}

export interface ModuleVariantLikeRef extends ModuleRef {
    type: ModuleVariantLikeRefType;
}

export interface ModuleFunctionRef extends ModuleRef {
    type: ModuleFunctionType;
}

//

export type ModuleRefType = 
    | ModuleTypeLikeRefType
    | ModuleVariantLikeRefType;

export type ModuleTypeLikeRefType = Type;

export type ModuleVariantLikeRefType =
    | ModuleFunctionType;

export type ModuleFunctionType = {
    return?: Type;
    parameter?: Type;
}