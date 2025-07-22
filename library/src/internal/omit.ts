import { zuordType } from "@zuord/type";
import { Pattern } from "./pattern.types";
import { Omit } from "./omit.types";

export function omit<T extends object, P extends Pattern<T>>(obj: T, pattern: P) : Omit<T, P> {
    if (!zuordType.object(obj)) {
        throw new TypeError("omit: First argument must be a valid object.");
    }
    if (!zuordType.object(pattern)) {
        throw new TypeError("omit: Second argument must be a valid pattern (object).");
    }

    const result : any = {};

    for (const key of Object.keys(obj)) {
        const objVal = (obj as any)[key];
        const patVal = (pattern as any)[key];

        if (Object.prototype.hasOwnProperty.call(pattern, key)) {
            if (patVal === true) {
                continue;
            }
            if (zuordType.object(patVal) && zuordType.object(objVal)) {
                const sub = omit(objVal, patVal);
                if (zuordType.object(sub) && Object.keys(sub).length > 0) {
                    result[key] = sub;
                }
            } else {
                result[key] = objVal;
            }
        } else {
            result[key] = objVal;
        }
    }

    return result as Omit<T, P>;
}