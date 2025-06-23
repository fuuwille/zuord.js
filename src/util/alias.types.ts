import type { ZuordIsKey, ZuordHasKey, ZuordAnyHasKey, ZuordAllHasKey } from "./key.types";
import type { ZuordIsNever } from "./never.types";
import type { ZuordIsExtends } from "./extends.types";
import type { ZuordIsExists } from "./exists.types";
import type { ZuordIsFunction } from "./function.types";
import type { ZuordPlainObject, ZuordIsObject, ZuordIsPlainObject } from "./object.types";
import type { ZuordIsArray, ZuordHasArray, ZuordHasAnyArray, ZuordHasAllArray } from "./array.types";
import type { ZuordArrayDepth } from "./array.types";
import type { ZuordOptional } from "./optional.types";
import type { ZuordUnionOf } from "./union.types";
import type { ZuordIsPattern } from "./pattern.types";
import type { ZuordMode } from "./mode.types";

export namespace ZuordUtil {
    export type IsKey<T, K> = ZuordIsKey<T, K>;
    export type HasKey<T, K> = ZuordHasKey<T, K>;
    export type AnyHasKey<U extends readonly unknown[], K> = ZuordAnyHasKey<U, K>;
    export type AllHasKey<U extends readonly unknown[], K> = ZuordAllHasKey<U, K>;
    export type IsNever<T> = ZuordIsNever<T>;
    export type IsExtends<T, U> = ZuordIsExtends<T, U>;
    export type IsExists<T, E> = ZuordIsExists<T, E>;
    export type IsFunction<T> = ZuordIsFunction<T>;
    export type PlainObject = ZuordPlainObject;
    export type IsObject<T> = ZuordIsObject<T>;
    export type IsPlainObject<T> = ZuordIsPlainObject<T>;
    export type IsArray<T> = ZuordIsArray<T>;
    export type HasArray<T> = ZuordHasArray<T>;
    export type HasAnyArray<T extends readonly unknown[]> = ZuordHasAnyArray<T>;
    export type HasAllArray<T extends readonly unknown[]> = ZuordHasAllArray<T>;
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
    export type Optional<T> = ZuordOptional<T>;
    export type UnionOf<M extends readonly string[]> = ZuordUnionOf<M>;
    export type IsPattern<P> = ZuordIsPattern<P>;
    export type Mode<M extends string> = ZuordMode<M>;
}