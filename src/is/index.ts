export { type ZuordIsExtends } from "./extends";
export { type ZuordIsExists } from "./exists";
export { type ZuordIsArray } from "./array";
export { type ZuordIsPlain } from "./plain";
export { isObject, type ZuordIsObject } from "./object";
export { isFunction, type ZuordIsFunction } from "./function";
export { isNever, type ZuordIsNever } from "./never";

import { type ZuordIsExtends } from "./extends";
import { type ZuordIsExists } from "./exists";
import { type ZuordIsArray } from "./array";
import { type ZuordIsPlain } from "./plain";
import { isObject, type ZuordIsObject } from "./object";
import { isFunction, type ZuordIsFunction } from "./function";
import { isNever, type ZuordIsNever } from "./never";

export namespace ZuordIs {
    export type Exists<T, H> = ZuordIsExists<T, H>;
    export type Extends<O, T> = ZuordIsExtends<O, T>;
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