import { isObject } from "./utils/isObject";
import { ZuordMerge } from "./zuordMerge";
import { ZuordOmit } from "./zuordOmit";
import { ZuordPick } from "./zuordPick";
import { ZuordSchema } from "./zuordSchema";

export class zuord {
    private constructor() {
    }

    //

    public static merge<U extends object[]>(...content: U) {
        if (content.length === 0) {
            return {} as ZuordMerge<U>;
        }

        const result: Record<string, unknown> = {};

        for (const obj of content) {
            if (!isObject(obj)) continue;

            for (const [key, value] of Object.entries(obj)) {
                if (isObject(value) && isObject(result[key])) {
                    result[key] = zuord.merge(result[key] as object, value as object);
                } else {
                    result[key] = value;
                }
            }
        }

        return result as ZuordMerge<U>;
    }

    public static pick<T extends object, S extends ZuordSchema<T>>(obj: T, schema: S) {
        if (!isObject(obj)) {
            throw new TypeError("pick: First argument must be a valid object.");
        }
        if (!isObject(schema)) {
            throw new TypeError("pick: Second argument must be a valid schema (object).");
        }

        const result : any = {};

        for (const key of Object.keys(schema)) {
            const patVal = (schema as any)[key];
            const objVal = (obj as any)[key];

            if (patVal === true) {
                result[key] = objVal;
            } else if (isObject(patVal) && isObject(objVal)) {
                result[key] = zuord.pick(objVal, patVal);
            }
        }

        return result as ZuordPick<T, S>;
    }

    public static omit<T extends object, S extends ZuordSchema<T>>(obj: T, schema: S) {
        if (!isObject(obj)) {
            throw new TypeError("omit: First argument must be a valid object.");
        }
        if (!isObject(schema)) {
            throw new TypeError("omit: Second argument must be a valid schema (object).");
        }

        const result : any = {};

        for (const key of Object.keys(obj)) {
            const objVal = (obj as any)[key];
            const patVal = (schema as any)[key];

            if (Object.prototype.hasOwnProperty.call(schema, key)) {
                if (patVal === true) {
                    continue;
                }
                if (isObject(patVal) && isObject(objVal)) {
                    const sub = zuord.omit(objVal, patVal);
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

        return result as ZuordOmit<T, S>;
    }

    //

}

export default zuord;

//

export type { ZuordMerge as ZuordContent } from "./zuordMerge";
export type { ZuordPick, ZuordPickOf } from "./zuordPick";
export type { ZuordOmit, ZuordOmitOf } from "./zuordOmit";
export type { ZuordSchema, IsZuordSchema } from "./zuordSchema";