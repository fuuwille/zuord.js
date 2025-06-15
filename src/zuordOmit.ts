import { ZuordIsNever } from "./is/never";
import { isObject } from "./is/object";
import { ZuordUtilNormalize } from "./util/normalize";
import { ZuordPattern } from "./zuordPattern";

export type ZuordOmit<T, U> = ZuordUtilNormalize<ZuordOmitRaw<T, U>>;

export type ZuordOmitRaw<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? ZuordIsNever<ZuordOmitRaw<T[K], U[K]>> extends true
                            ? never
                            : K
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? T[K] extends object
                    ? ZuordOmitRaw<T[K], U[K]>
                    : T[K]
                : T[K]
            : T[K];
};

export type ZuordOmitOf<T, U> = ZuordOmit<T, ZuordPattern<U>>;

//

export function zuordOmit<T extends object, P extends ZuordPattern<T>>(obj: T, pattern: P) : ZuordOmit<T, P> {
    if (!isObject(obj)) {
        throw new TypeError("omit: First argument must be a valid object.");
    }
    if (!isObject(pattern)) {
        throw new TypeError("omit: Second argument must be a valid schema (object).");
    }

    const result : any = {};

    for (const key of Object.keys(obj)) {
        const objVal = (obj as any)[key];
        const patVal = (pattern as any)[key];

        if (Object.prototype.hasOwnProperty.call(pattern, key)) {
            if (patVal === true) {
                continue;
            }
            if (isObject(patVal) && isObject(objVal)) {
                const sub = zuordOmit(objVal, patVal);
                if (isObject(sub) && Object.keys(sub).length > 0) {
                    result[key] = sub;
                }
            } else {
                result[key] = objVal;
            }
        } else {
            result[key] = objVal;
        }
    }

    return result as ZuordOmit<T, P>;
}