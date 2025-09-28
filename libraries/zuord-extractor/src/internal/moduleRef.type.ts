import { Type } from "ts-morph";

export type ModuleTypeLikeRef =
    | ModuleTypeRef
    | ModuleTypeFunctionLikeRef;

export type ModuleTypeRef = {
    current?: Type;
}

export type ModuleTypeFunctionLikeRef = {
    return?: Type;
    parameter?: Type;
}