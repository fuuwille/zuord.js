import { ZuordContent } from "./zuordContent";
import { ZuordOmit, ZuordOmitOf } from "./zuordOmit";
import { ZuordPattern } from "./zuordPattern";
import { ZuordPick, ZuordPickOf } from "./zuordPick";
import { ZuordSchema } from "./zuordSchema";

export class zuord {
    private constructor() {
    }

    //

    public static content<U extends object[]>(...content: U): ZuordContent<U> {
        if (content.length === 0) {
            return {} as ZuordContent<U>;
        }

        const result: any = {};

        for (const obj of content) {
            if (!zuord.#isObject(obj)) continue;

            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const value = (obj as Record<string, any>)[key];
                    
                    if (zuord.#isObject(value) && zuord.#isObject(result[key])) {
                        result[key] = zuord.content(result[key], value);
                    } else {
                        result[key] = value;
                    }
                }
            }
        }

        return result;    }

    public static pattern<T extends object>(obj: T) : ZuordPattern<T> {
        if (!zuord.#isObject(obj)) {
            return true as ZuordPattern<T>;
        }

        const result: any = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = zuord.pattern((obj as any)[key]);
            }
        }

        return result;
    }

    public static pick<T extends object, S extends ZuordSchema<T>>(obj: T, schema: S): ZuordPick<T, S> {
        if (!zuord.#isObject(obj) || !zuord.#isObject(schema)) {
            return obj as ZuordPick<T, S>;
        }

        const result: any = {};

        for (const key in schema) {
            if (Object.prototype.hasOwnProperty.call(schema, key)) {
                const patVal = schema[key];
                const objVal = (obj as any)[key];

                if (patVal === true) {
                    result[key] = objVal;
                } else if (zuord.#isObject(patVal) && zuord.#isObject(objVal)) {
                    result[key] = zuord.pick(objVal, patVal);
                }
            }
        }

        return result;
    }

    public static omit<T extends object, S extends ZuordSchema<T>>(obj: T, schema: S): ZuordOmit<T, S> {
        if (!zuord.#isObject(obj) || !zuord.#isObject(schema)) {
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

                if (zuord.#isObject(patVal) && zuord.#isObject(objVal)) {
                    const sub = zuord.omit(objVal, patVal);
                    if (zuord.#isObject(sub) && Object.keys(sub).length > 0) {
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

    static #isObject(item: any): item is object {
        return item !== null && typeof item === 'object' && !Array.isArray(item);
    }
}

export default zuord;