import { zuordUtil, ZuordUtil } from "../index"
import { ZuordPattern } from "./pattern";

type Omit<T, U> = ZuordUtil.Normalize<OmitRaw<T, U>>;

type OmitRaw<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? ZuordUtil.IsNever<OmitRaw<T[K], U[K]>> extends true
                            ? never
                            : K
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? T[K] extends object
                    ? OmitRaw<T[K], U[K]>
                    : T[K]
                : T[K]
            : T[K];
};

type OmitOf<T, U> = Omit<T, ZuordPattern<U>>;

function zuordOmit<T extends object, P extends ZuordPattern<T>>(obj: T, pattern: P) : Omit<T, P> {
    if (!zuordUtil.isObject(obj)) {
        throw new TypeError("omit: First argument must be a valid object.");
    }
    if (!zuordUtil.isObject(pattern)) {
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
            if (zuordUtil.isObject(patVal) && zuordUtil.isObject(objVal)) {
                const sub = zuordOmit(objVal, patVal);
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

    return result as Omit<T, P>;
}

//

export type { Omit as ZuordOmit };
export type { OmitRaw as ZuordOmitRaw };
export type { OmitOf as ZuordOmitOf };
export { zuordOmit as zuordOmit };