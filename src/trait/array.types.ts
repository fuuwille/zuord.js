import { ZuordTrait } from "@/trait/_alias.types";

type ArrayIn<T> = T extends readonly (infer T)[] ? T : never;

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[]
    ? ArrayDepth<U, [unknown, ...D]> : D['length'];

type IsArray<T> = ZuordTrait.Is<T, readonly unknown[]>

type IsSomeArray<U extends readonly unknown[]> = ZuordTrait.IsSome<U, readonly unknown[]>;

type IsAllArray<U extends readonly unknown[]> = ZuordTrait.IsAll<U, readonly unknown[]>;

type HasArray<T> = ZuordTrait.Has<T, readonly unknown[]>;

type HasSomeArray<U extends readonly unknown[]> = ZuordTrait.HasSome<U, readonly unknown[]>;

type HasAllArray<U extends readonly unknown[]> = ZuordTrait.HasAll<U, readonly unknown[]>;

type ExtractArray<T> = ZuordTrait.Extract<T, readonly unknown[]>;

type ExcludeArray<T> = ZuordTrait.Exclude<T, readonly unknown[]>;

export type { ArrayIn as ZuordArrayIn };
export type { ArrayDepth as ZuordArrayDepth };
export type { IsArray as ZuordIsArray };
export type { IsSomeArray as ZuordIsSomeArray };
export type { IsAllArray as ZuordIsAllArray };
export type { HasArray as ZuordHasArray };
export type { HasSomeArray as ZuordHasSomeArray };
export type { HasAllArray as ZuordHasAllArray };
export type { ExtractArray as ZuordExtractArray };
export type { ExcludeArray as ZuordExcludeArray };