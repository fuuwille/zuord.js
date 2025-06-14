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

    public static pick<T extends object, S extends ZuordSchema<T>>(obj: T, schema: S): ZuordPick<T, S> {
        if (!isObject(obj) || !isObject(schema)) {
            return obj as ZuordPick<T, S>;
        }

        const result: any = {};

        for (const key in schema) {
            if (Object.prototype.hasOwnProperty.call(schema, key)) {
                const patVal = schema[key];
                const objVal = (obj as any)[key];

                if (patVal === true) {
                    result[key] = objVal;
                } else if (isObject(patVal) && isObject(objVal)) {
                    result[key] = zuord.pick(objVal, patVal);
                }
            }
        }

        return result;
    }

    public static omit<T extends object, S extends ZuordSchema<T>>(obj: T, schema: S): ZuordOmit<T, S> {
        if (!isObject(obj) || !isObject(schema)) {
            return obj as ZuordOmit<T, S>;
        }

        const result: any = {};

        for (const key in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

            const objVal = obj[key];
            const patVal = (schema as any)[key] as ZuordSchema<typeof objVal>;

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

        return result;
    }

    //

}

export default zuord;

//

export type { ZuordMerge as ZuordContent } from "./zuordMerge";
export type { ZuordPick, ZuordPickOf } from "./zuordPick";
export type { ZuordOmit, ZuordOmitOf } from "./zuordOmit";
export type { ZuordSchema, IsZuordSchema } from "./zuordSchema";