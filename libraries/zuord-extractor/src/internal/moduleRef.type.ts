import { Type } from "ts-morph";

export type ModuleRef =
    | ModuleTypeLikeRef
    | ModuleFunctionLikeRef;

export type ModuleTypeLikeRef = {
    current?: Type;
}

export type ModuleFunctionLikeRef = {
    return?: Type;
    parameter?: Type;
}