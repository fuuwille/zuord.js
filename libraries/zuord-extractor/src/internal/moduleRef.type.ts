import { Type } from "ts-morph";

export type ModuleRef =
    | ModuleTypeLikeRef
    | ModuleVariantLikeRef;

export type ModuleTypeLikeRef = {
    type?: Type;
}

export type ModuleVariantLikeRef =
    | ModuleVariableRef
    | ModuleFunctionLikeRef;

export type ModuleVariableRef = {
    declarationType?: Type;
}

export type ModuleFunctionLikeRef = {
    returnType?: Type;
    parameterType?: Type;
}