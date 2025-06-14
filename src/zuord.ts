import DeepPartial from "./utils/deepPartial";
import { ZuordContent } from "./zuordContent";
import { ZuordPattern } from "./zuordPattern";
import { ZuordPick } from "./zuordPick";

export class zuord {
    private constructor() {
    }

    //

    public static content<U extends object[]>(...content: U): ZuordContent<U> {
        if (content.length === 0) {
            return {} as ZuordContent<U>;
        }

        return zuord.#deepMerge(...content) as ZuordContent<U>;
    }

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

    public static pick<T extends object, P>(obj: T, pattern: P): ZuordPick<T, P> {
        if (!zuord.#isObject(obj) || !zuord.#isObject(pattern)) {
            return obj;
        }

        const result: any = {};

        for (const key in pattern) {
            if (Object.prototype.hasOwnProperty.call(pattern, key)) {
                const patVal = pattern[key];
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

    //

    static #isObject(item: any): item is object {
        return item !== null && typeof item === 'object' && !Array.isArray(item);
    }

    static #deepMerge<T extends object[]>(...objects: T): T[number] {
        const result: any = {};

        for (const obj of objects) {
            if (!zuord.#isObject(obj)) continue;

            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const value = (obj as Record<string, any>)[key];
                    
                    if (zuord.#isObject(value) && zuord.#isObject(result[key])) {
                        result[key] = zuord.#deepMerge(result[key], value);
                    } else {
                        result[key] = value;
                    }
                }
            }
        }

        return result;
    }
}

export default zuord;
