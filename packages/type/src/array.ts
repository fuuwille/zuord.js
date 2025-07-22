import { ZuordType } from ".";

export function array(obj: unknown) : obj is ZuordType.Array {
    return Array.isArray(obj);
}