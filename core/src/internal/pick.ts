import { InternalZuord } from "./index"
import { zuordType } from "zuord/type";

export function pick<T extends object, P extends InternalZuord.Pattern<T>>(obj: T, pattern: P) : InternalZuord.Pick<T, P> {
    if (!zuordType.isObject(obj)) {
        throw new TypeError("pick: First argument must be a valid object.");
    }
    if (!zuordType.isObject(pattern)) {
        throw new TypeError("pick: Second argument must be a valid pattern (object).");
    }

    const result : any = {};

    for (const key of Object.keys(pattern)) {
        const patVal = (pattern as any)[key];
        const objVal = (obj as any)[key];

        if (patVal === true) {
            result[key] = objVal;
        } else if (zuordType.isObject(patVal) && zuordType.isObject(objVal)) {
            result[key] = pick(objVal, patVal);
        }
    }

    return result as InternalZuord.Pick<T, P>;
}