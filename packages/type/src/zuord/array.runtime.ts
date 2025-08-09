import { ZuordType as Type } from ".";

export function array<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is Type.Array<T> {
    if (globalThis.Array.isArray(obj)) {
        if (type?.item) {
            return obj.every(type.item);
        }
        return true;
    }
    return false;
}

export function arrayNest<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is Type.ArrayNest<T> {
  return array(obj, { item: (item): item is Type.Array<T> => array<T>(item, type) });
}

export function arrayEmpty(obj: unknown): obj is Type.ArrayEmpty {
    return array(obj) && obj.length === 0;
}