import { Type } from "ts-morph";

export type ModuleRef =
    | ModuleTypeLikeRef
    | ModuleFunctionLikeRef;

export type ModuleTypeLikeRef = {
    currentType?: Type;
}

export type ModuleFunctionLikeRef = {
    returnType?: Type;
    parameterType?: Type;
}