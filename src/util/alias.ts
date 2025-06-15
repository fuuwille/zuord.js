import { isNever } from "./never";
import { isFunction } from "./function";
import { isObject } from "./object";
import { isPlain } from "./plain";
import { zuordPattern as pattern } from "./pattern";

export class zuordUtil {
    static isNever = isNever;
    static isFunction = isFunction;
    static isObject = isObject;
    static isPlain = isPlain;
    static pattern = pattern;
}