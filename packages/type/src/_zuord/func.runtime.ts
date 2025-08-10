import { ZuordType as Type } from ".";

export function func(obj : unknown): obj is Type.Func {
    if (typeof obj !== "function") return false;

    return true;
}