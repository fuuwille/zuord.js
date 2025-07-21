import { ZuordType } from ".";

export function plain(obj: unknown) : obj is ZuordType.Plain {
    if (typeof obj !== "object" || obj === null) return false;

    return Object.getPrototypeOf(obj) === Object.prototype;
}