import { zuordType } from "@zuord/type";
import { Pattern } from "./pattern.types";
import { Pick } from "./pick.types";

export function pick<T extends object, P extends Pattern<T>>(obj: T, pattern: P) : Pick<T, P> {
    if (!zuordType.object(obj)) {
        throw new TypeError("pick: First argument must be a valid object.");
    }
    if (!zuordType.object(pattern)) {
        throw new TypeError("pick: Second argument must be a valid pattern (object).");
    }

    const result : any = {};

    for (const key of Object.keys(pattern)) {
        const patVal = (pattern as any)[key];
        const objVal = (obj as any)[key];

        if (patVal === true) {
            result[key] = objVal;
        } else if (zuordType.object(patVal) && zuordType.object(objVal)) {
            result[key] = pick(objVal, patVal);
        }
    }

    return result as Pick<T, P>;
}