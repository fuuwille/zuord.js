import { Zuord } from "./alias.types"
import { zuordType } from "./type/_alias";

function omit<T extends object, P extends Zuord.Pattern<T>>(obj: T, pattern: P) : Zuord.Omit<T, P> {
    if (!zuordType.isObject(obj)) {
        throw new TypeError("omit: First argument must be a valid object.");
    }
    if (!zuordType.isObject(pattern)) {
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
            if (zuordType.isObject(patVal) && zuordType.isObject(objVal)) {
                const sub = omit(objVal, patVal);
                if (zuordType.isObject(sub) && Object.keys(sub).length > 0) {
                    result[key] = sub;
                }
            } else {
                result[key] = objVal;
            }
        } else {
            result[key] = objVal;
        }
    }

    return result as Zuord.Omit<T, P>;
}

export { omit as zuordOmit };