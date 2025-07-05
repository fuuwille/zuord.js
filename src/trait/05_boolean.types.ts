import { ZuordTrait } from "@/trait/_alias.types";

type IsBoolean<T> = ZuordTrait.Is<T, boolean>;

type IsSomeBoolean<U extends readonly unknown[]> = ZuordTrait.IsSome<U, boolean>;

type IsAllBoolean<U extends readonly unknown[]> = ZuordTrait.IsAll<U, boolean>;

type HasBoolean<T> = ZuordTrait.Has<T, boolean>;

type HasSomeBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasBoolean<First> extends true ? true : HasSomeBoolean<Rest>) : false;

type HasAllBoolean<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (HasBoolean<First> extends true ? HasAllBoolean<Rest> : false) : true;

type ExtractBoolean<T> = HasBoolean<T> extends true ? T : never;

type ExcludeBoolean<T> = T extends any ? (IsBoolean<T> extends false ? T : never) : never;

export type { IsBoolean as ZuordIsBoolean };

export type { IsSomeBoolean as ZuordIsSomeBoolean };

export type { IsAllBoolean as ZuordIsAllBoolean };

export type { HasBoolean as ZuordHasBoolean };

export type { HasSomeBoolean as ZuordHasSomeBoolean };

export type { HasAllBoolean as ZuordHasAllBoolean };

export type { ExtractBoolean as ZuordExtractBoolean };

export type { ExcludeBoolean as ZuordExcludeBoolean };