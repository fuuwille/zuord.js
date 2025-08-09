import { Array } from "./array.types";

export function array<T extends unknown = unknown>(obj: unknown, checkItem?: (item: T) => item is T): obj is Array<T> {
    if (globalThis.Array.isArray(obj)) {
        if (checkItem) {
            return obj.every(checkItem);
        }
        return true;
    }
    return false;
}