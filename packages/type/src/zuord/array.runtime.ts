import { ZuordType as Type } from ".";

export function array<T extends unknown = unknown>(obj: unknown, checkItem?: (item: unknown) => item is T): obj is Type.Array<T> {
    if (globalThis.Array.isArray(obj)) {
        if (checkItem) {
            return obj.every(checkItem);
        }
        return true;
    }
    return false;
}

export function arrayNest<T extends unknown = unknown>(obj: unknown, checkItem?: (item: unknown) => item is T): obj is Type.ArrayNest<T> {
  return array(obj, (item): item is Array<T> => array<T>(item, checkItem));
}

export function arrayEmpty(obj: unknown): obj is Type.ArrayEmpty {
    return array(obj) && obj.length === 0;
}