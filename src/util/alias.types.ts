import type { ZuordIsNever } from "./never.types";
import type { ZuordIsExtends } from "./extends.types";
import type { ZuordIsExists } from "./exists.types";
import type { ZuordIsFunction } from "./function.types";
import type { ZuordIsObject } from "./object.types";
import type { ZuordHasArray, ZuordHasAnyArray } from "./array.types";
import type { ZuordArrayDepth } from "./array.types";
import type { ZuordIsPlain } from "./plain.types";
import type { ZuordOptional } from "./optional.types";
import type { ZuordUnionOf } from "./union.types";
import type { ZuordIsPattern } from "./pattern.types";
import type { ZuordMode } from "./mode.types";

export namespace ZuordUtil {
    export type IsNever<T> = ZuordIsNever<T>;
    export type IsExtends<T, U> = ZuordIsExtends<T, U>;
    export type IsExists<T, E> = ZuordIsExists<T, E>;
    export type IsFunction<T> = ZuordIsFunction<T>;
    export type IsObject<T> = ZuordIsObject<T>;
    export type HasArray<T> = ZuordHasArray<T>;
    export type HasAnyArray<T extends readonly unknown[]> = ZuordHasAnyArray<T>;
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
    export type IsPlain<T> = ZuordIsPlain<T>;
    export type Optional<T> = ZuordOptional<T>;
    export type UnionOf<M extends readonly string[]> = ZuordUnionOf<M>;
    export type IsPattern<P> = ZuordIsPattern<P>;
    export type Mode<M extends string> = ZuordMode<M>;
}