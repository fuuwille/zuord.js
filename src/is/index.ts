export { type ZuordIsArray } from "./isArray";
export { type ZuordIsPlain } from "./isPlain";
export { isObject, type ZuordIsObject } from "./isObject";
export { isFunction, type ZuordIsFunction } from "./isFunction";
export { isNever, type ZuordIsNever } from "./isNever";

import { type ZuordIsArray } from "./isArray";
import { type ZuordIsPlain } from "./isPlain";
import { isObject, type ZuordIsObject } from "./isObject";
import { isFunction, type ZuordIsFunction } from "./isFunction";
import { isNever, type ZuordIsNever } from "./isNever";

export namespace ZuordIs {
    export type Array<T> = ZuordIsArray<T>;
    export type Plain<T> = ZuordIsPlain<T>;
    export type Object<T> = ZuordIsObject<T>;
    export type Function<T> = ZuordIsFunction<T>;
    export type Never<T> = ZuordIsNever<T>;
};

export const zuordIs = {
    object: isObject,
    function: isFunction,
    never: isNever,
} as const;