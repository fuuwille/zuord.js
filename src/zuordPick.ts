import { isObject } from "./utils/isObject";
import { ZuordNormalize } from "./zuordNormalize";
import { IsZuordSchema, ZuordSchema } from "./zuordSchema";

export type ZuordPick<T, U> = ZuordNormalize<{
    [K in keyof T & keyof U as IsZuordSchema<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? ZuordPick<T[K], U[K]>
                    : never
                : never;
}>;

export type ZuordPickRaw<T, U> = {
    [K in keyof T & keyof U as IsZuordSchema<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? ZuordPick<T[K], U[K]>
                    : never
                : never;
};

export type ZuordPickOf<T, U> = ZuordPick<T, ZuordSchema<U>>;

//

export function zuordPick<T extends object, P extends ZuordSchema<T>>(obj: T, pattern: P) : ZuordPick<T, P> {
    if (!isObject(obj)) {
        throw new TypeError("pick: First argument must be a valid object.");
    }
    if (!isObject(pattern)) {
        throw new TypeError("pick: Second argument must be a valid schema (object).");
    }

    const result : any = {};

    for (const key of Object.keys(pattern)) {
        const patVal = (pattern as any)[key];
        const objVal = (obj as any)[key];

        if (patVal === true) {
            result[key] = objVal;
        } else if (isObject(patVal) && isObject(objVal)) {
            result[key] = zuordPick(objVal, patVal);
        }
    }

    return result as ZuordPick<T, P>;
}