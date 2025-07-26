import { Array, ArrayOf } from "./array.types";

export function array(obj: unknown): obj is Array {
    return globalThis.Array.isArray(obj);
}

export function arrayOf<T>(obj: unknown, checkItem: (item: unknown) => item is T): obj is ArrayOf<T> {
    if (!array(obj)) return false;
    return obj.every(checkItem);
}