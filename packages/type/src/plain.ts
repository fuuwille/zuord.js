import { Plain } from "./plain.types";

export function plain(obj: unknown) : obj is Plain {
    if (typeof obj !== 'object' || obj === null) return false;

    let proto = Object.getPrototypeOf(obj);
    return proto === null || proto === Object.prototype;
}