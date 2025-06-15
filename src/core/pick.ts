import { zuordUtil, ZuordUtil } from "../index"
import { ZuordPattern, ZuordIsPattern } from "./pattern";

type Pick<T, U> = ZuordUtil.Normalize<PickRaw<T, U>>;

type PickRaw<T, U> = {
    [K in keyof T & keyof U as ZuordIsPattern<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? PickRaw<T[K], U[K]>
                    : never
                : never;
};

type PickOf<T, U> = Pick<T, ZuordPattern<U>>;

function pick<T extends object, P extends ZuordPattern<T>>(obj: T, pattern: P) : Pick<T, P> {
    if (!zuordUtil.isObject(obj)) {
        throw new TypeError("pick: First argument must be a valid object.");
    }
    if (!zuordUtil.isObject(pattern)) {
        throw new TypeError("pick: Second argument must be a valid schema (object).");
    }

    const result : any = {};

    for (const key of Object.keys(pattern)) {
        const patVal = (pattern as any)[key];
        const objVal = (obj as any)[key];

        if (patVal === true) {
            result[key] = objVal;
        } else if (zuordUtil.isObject(patVal) && zuordUtil.isObject(objVal)) {
            result[key] = pick(objVal, patVal);
        }
    }

    return result as Pick<T, P>;
}

//

export type { Pick as ZuordPick };
export type { PickRaw as ZuordPickRaw };
export type { PickOf as ZuordPickOf };
export { pick as zuordPick };