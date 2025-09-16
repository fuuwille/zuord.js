import type { FundType } from '@zuord/type';

export type ResolveRequired<T, TMode> = [T] extends [FundType.Plain] ? { 
    [K in keyof T as {} extends Pick<T, K> ? never : K]: Exclude<T[K], undefined> extends infer TValue ? (
        TMode extends { shallo: true } ? (
            TValue
        ) : ResolveRequired<TValue, TMode>
    ) : never;
} : T;