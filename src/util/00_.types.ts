type Eq<A, B> = (<T>() => T extends A ? 0 : 1) extends (<T>() => T extends B ? 0 : 1) ? true : false;

type EqSome<U extends readonly unknown[], B> = U extends [infer First, ...infer Rest] ? (
    Eq<First, B> extends true ? true : EqSome<Rest, B>
) : false;

type EqAll<U extends readonly unknown[], B> = U extends [infer First, ...infer Rest] ? (
    Eq<First, B> extends true ? EqAll<Rest, B> : false
) : true;

type Is<A, B> = [A] extends [B] ? true : false;

type IsSome<U extends readonly unknown[], B> = U extends [infer First, ...infer Rest] ? (
    Is<First, B> extends true ? true : IsSome<Rest, B>
) : false;

type IsAll<U extends readonly unknown[], B> = U extends [infer First, ...infer Rest] ? (
    Is<First, B> extends true ? IsAll<Rest, B> : false
) : true;

type Has<A, B> = true extends (A extends any ? Is<A, B> : never) ? true : false;

type HasSome<U extends readonly unknown[], B> = U extends [infer First, ...infer Rest] ? (
    Has<First, B> extends true ? true : HasSome<Rest, B>
) : false;

type HasAll<U extends readonly unknown[], B> = U extends [infer First, ...infer Rest] ? (
    Has<First, B> extends true ? HasAll<Rest, B> : false
) : true;

type Exclude<A, B> = A extends any ? (Is<A, B> extends false ? A : never) : never;

type ExcludeExact<A, B> = A extends any ? (Eq<A, B> extends false ? A : never) : never;

type Extract<A, B> = A extends any ? (Is<A, B> extends true ? A : never) : never;

export type { Eq as ZuordEq };

export type { EqSome as ZuordEqSome };

export type { EqAll as ZuordEqAll };

export type { Is as ZuordIs };

export type { IsSome as ZuordIsSome };

export type { IsAll as ZuordIsAll };

export type { Has as ZuordHas };

export type { HasSome as ZuordHasSome };

export type { HasAll as ZuordHasAll };

export type { Exclude as ZuordExclude };

export type { ExcludeExact as ZuordExcludeExact };

export type { Extract as ZuordExtract };