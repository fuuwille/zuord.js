import * as Zuord from "@/core/alias.types"
import * as zuordUtil from "@/util/alias";
import * as ZuordUtil from "@/util/alias.types";

function omit<T extends object, P extends ZuordUtil.Pattern<T>>(obj: T, pattern: P) : Zuord.Omit<T, P> {
    if (!zuordUtil.isObject(obj)) {
        throw new TypeError("omit: First argument must be a valid object.");
    }
    if (!zuordUtil.isObject(pattern)) {
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
            if (zuordUtil.isObject(patVal) && zuordUtil.isObject(objVal)) {
                const sub = omit(objVal, patVal);
                if (zuordUtil.isObject(sub) && Object.keys(sub).length > 0) {
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