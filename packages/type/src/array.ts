import { Array, ArrayNest } from "./array.types";

export function array<T extends unknown = unknown>(obj: unknown, checkItem?: (item: T) => item is T): obj is Array<T> {
    if (globalThis.Array.isArray(obj)) {
        if (checkItem) {
            return obj.every(checkItem);
        }
        return true;
    }
    return false;
}

export function arrayNest<T extends unknown = unknown>(obj: unknown): obj is ArrayNest<T> {
    return array(obj, array<T>);
}