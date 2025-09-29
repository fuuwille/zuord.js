import { Type } from "ts-morph";

export type ModuleRef = {
    type: ModuleRefType;
};

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