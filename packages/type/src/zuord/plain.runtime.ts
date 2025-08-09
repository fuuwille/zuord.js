import { array } from "./array";
import { Plain, PlainArray } from "./plain.types";

export function plain<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is Plain {
    if (typeof obj !== 'object' || obj === null) return false;

    if (Object.getPrototypeOf(obj) !== Object.prototype) return false;

    if(type) {
        const entries = Object.entries(obj);

        for (const [key, value] of entries) {
            if (type?.key && !type.key(key)) return false;
            if (type?.item && !type.item(value)) return false;
        }
    }

    return true;
}

export function plainArray(obj: unknown) : obj is PlainArray {
    return array(obj, plain);
}