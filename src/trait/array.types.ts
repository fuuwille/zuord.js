import { ZuordTrait } from "@/trait/_alias.types";

type IsArray<T> = ZuordTrait.Is<T, readonly unknown[]>

type IsSomeArray<U extends readonly unknown[]> = ZuordTrait.IsSome<U, readonly unknown[]>;

type IsAllArray<U extends readonly unknown[]> = ZuordTrait.IsAll<U, readonly unknown[]>;

type HasArray<T> = ZuordTrait.Has<T, readonly unknown[]>;

type HasSomeArray<U extends readonly unknown[]> = ZuordTrait.HasSome<U, readonly unknown[]>;

type HasAllArray<U extends readonly unknown[]> = ZuordTrait.HasAll<U, readonly unknown[]>;

type ExtractArray<T> = ZuordTrait.Extract<T, readonly unknown[]>;

type ExcludeArray<T> = ZuordTrait.Exclude<T, readonly unknown[]>;
export type { IsArray as ZuordIsArray };
export type { IsSomeArray as ZuordIsSomeArray };
export type { IsAllArray as ZuordIsAllArray };
export type { HasArray as ZuordHasArray };
export type { HasSomeArray as ZuordHasSomeArray };
export type { HasAllArray as ZuordHasAllArray };
export type { ExtractArray as ZuordExtractArray };
export type { ExcludeArray as ZuordExcludeArray };