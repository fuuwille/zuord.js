import { Type } from "ts-morph";

export type ModuleTypeLikeRef =
    | ModuleTypeRef;

export type ModuleTypeRef = {
    current?: Type;
}