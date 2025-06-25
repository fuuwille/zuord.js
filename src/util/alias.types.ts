import type { ZuordAsAny } from "./any.types";
import type { ZuordIgnored, ZuordHasIgnored, ZuordAsIgnored, ZuordAsNonIgnored } from "./ignore.types";
import type { ZuordIsKey, ZuordHasKey, ZuordAnyHasKey, ZuordAllHasKey } from "./key.types";
import type { ZuordIsNever } from "./never.types";
import type { ZuordIsExtends } from "./extends.types";
import type { ZuordIsExists } from "./exists.types";
import type { ZuordIsFunction } from "./function.types";
import type { ZuordIsObject } from "./object.types";
import type { ZuordPlain, ZuordIsPlain, ZuordHasPlain, ZuordHasNonPlain, ZuordAsPlain, ZuordAsNonPlain } from "./plain.types";
import type { ZuordIsArray, ZuordHasArray, ZuordHasAnyArray, ZuordHasAllArray } from "./array.types";
import type { ZuordArrayDepth } from "./array.types";
import type { ZuordOptional } from "./optional.types";
import type { ZuordUnionOf } from "./union.types";
import type { ZuordIsPattern } from "./pattern.types";
import type { ZuordMode } from "./mode.types";

export namespace ZuordUtil {
    export type AsAny<T> = ZuordAsAny<T>;
    export type Ignored<U extends object[] = []> = ZuordIgnored<U>;
    export type HasIgnored<T, I extends object[] = ZuordUtil.Ignored> = ZuordHasIgnored<T, I>;
    export type AsIgnored<T, I extends object[] = ZuordUtil.Ignored> = ZuordAsIgnored<T, I>;
    export type AsNonIgnored<T, I extends object[] = ZuordUtil.Ignored> = ZuordAsNonIgnored<T, I>;
    export type IsKey<T, K> = ZuordIsKey<T, K>;
    export type HasKey<T, K> = ZuordHasKey<T, K>;
    export type AnyHasKey<U extends readonly unknown[], K> = ZuordAnyHasKey<U, K>;
    export type AllHasKey<U extends readonly unknown[], K> = ZuordAllHasKey<U, K>;
    export type IsNever<T> = ZuordIsNever<T>;
    export type IsExtends<T, U> = ZuordIsExtends<T, U>;
    export type IsExists<T, E> = ZuordIsExists<T, E>;
    export type IsFunction<T> = ZuordIsFunction<T>;
    export type IsObject<T> = ZuordIsObject<T>;
    export type Plain<T> = ZuordPlain<T>;
    export type IsPlain<T> = ZuordIsPlain<T>;
    export type HasPlain<T> = ZuordHasPlain<T>;
    export type HasNonPlain<T> = ZuordHasNonPlain<T>;
    export type AsPlain<T> = ZuordAsPlain<T>;
    export type AsNonPlain<T> = ZuordAsNonPlain<T>;
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
    export type IsArray<T> = ZuordIsArray<T>;
    export type HasArray<T> = ZuordHasArray<T>;
    export type HasAnyArray<T extends readonly unknown[]> = ZuordHasAnyArray<T>;
    export type HasAllArray<T extends readonly unknown[]> = ZuordHasAllArray<T>;
    export type Optional<T> = ZuordOptional<T>;
    export type UnionOf<M extends readonly any[]> = ZuordUnionOf<M>;
    export type IsPattern<P> = ZuordIsPattern<P>;
    export type Mode<M extends string> = ZuordMode<M>;
    export type MergeUnionObjects<U> = _MergeUnionObjects<U>;
}

type UnionKeys<U> = U extends object ? keyof U : never;

type AllKeys<U> = U extends any ? keyof U : never;

type ValueAt<U, K extends PropertyKey> =
  U extends any ? (K extends keyof U ? U[K] : never) : never;

type IsRequiredKey<U, K extends PropertyKey> =
  undefined extends ValueAt<U, K> ? false : true;

type RequiredKeys<U> = {
  [K in AllKeys<U>]-?: IsRequiredKey<U, K> extends true ? K : never
}[AllKeys<U>];

type OptionalKeys<U> = {
  [K in AllKeys<U>]-?: IsRequiredKey<U, K> extends false ? K : never
}[AllKeys<U>];

type NonUndefined<T> = T extends undefined ? never : T;

type _MergeUnionObjects<U> =
  ZuordUtil.IsPlain<U> extends true
    ? (
        { [K in RequiredKeys<U>]-?: ValueAt<U, K> }
        &
        { [K in OptionalKeys<U>]?: NonUndefined<ValueAt<U, K>> }
      )
    : never;