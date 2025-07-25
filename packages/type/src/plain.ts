import { Plain, PlainArray } from "./plain.types";

export function plain(obj: unknown) : obj is Plain {
    if (typeof obj !== 'object' || obj === null) return false;

    let proto = Object.getPrototypeOf(obj);
    return proto === null || proto === Object.prototype;
}

export function plainArray(obj: unknown) : obj is PlainArray {
    if (!Array.isArray(obj)) return false;

    return obj.every(item => plain(item));
}