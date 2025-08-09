import { array } from "./array";
import { tuple } from "./tuple";
import { ZuordType as Type } from ".";

export function plain<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is Type.Plain<TKey, TItem> {
    if (typeof obj !== 'object' || obj === null) return false;

    if (Object.getPrototypeOf(obj) !== Object.prototype) return false;

    if(type) {
        const entries = Object.entries(obj);

        for (const [key, value] of entries) {
            if (type.key && !type.key(key)) return false;
            if (type.item && !type.item(value)) return false;
        }
    }

    return true;
}

export function plainArray<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is Type.PlainArray<TKey, TItem> {
    return array(obj, { item: (item): item is Type.Plain<TKey, TItem> => plain(item, type) });
}

export function plainTuple<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is Type.PlainTuple<TKey, TItem> {
    return tuple(obj, { item: (item): item is Type.Plain<TKey, TItem> => plain(item, type) });
}