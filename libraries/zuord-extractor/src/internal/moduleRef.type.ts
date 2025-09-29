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

export interface ModuleVariableRef extends ModuleVariantLikeRef {
    type: ModuleVariableRefType;
}

export interface ModuleFunctionRef extends ModuleVariantLikeRef {
    type: ModuleFunctionRefType;
}

//

export type ModuleRefType = 
    | ModuleTypeLikeRefType
    | ModuleVariantLikeRefType;

export type ModuleTypeLikeRefType = ModuleRefTypeDef;

export type ModuleVariantLikeRefType =
    | ModuleVariableRefType
    | ModuleFunctionRefType;

export type ModuleVariableRefType = ModuleRefTypeDef;

export type ModuleFunctionRefType = {
    return: ModuleRefTypeDef;
    parameter: ModuleRefTypeDef;
}

export type ModuleRefTypeDef = Type | null;