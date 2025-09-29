import { Type } from "ts-morph";

export interface ModuleRef {
    type: ModuleRefType;
};

export interface ModuleTypeLikeRef extends ModuleRef {
    type: ModuleTypeLikeRefType;
}

export interface ModuleVariantLikeRef extends ModuleRef {
    type: ModuleVariantLikeRefType;
}

export interface ModuleFunctionLikeRef extends ModuleRef {
    type: ModuleFunctionLikeRefType;
}

//

export type ModuleRefType = 
    | ModuleTypeLikeRefType
    | ModuleVariantLikeRefType;

export type ModuleTypeLikeRefType = {
    identifier: ModuleRefType;
};

export type ModuleVariantLikeRefType =
    | ModuleFunctionLikeRefType;

export type ModuleFunctionLikeRefType = {
    return?: Type;
    parameter?: Type;
}