import type { ZuordType } from '@zuord/type';

export namespace Only {
    export type ResolveRequired<T, TMode> = [T] extends [ZuordType.Plain] ? { 
        [K in keyof T as {} extends Pick<T, K> ? never : K]: Exclude<T[K], undefined> extends infer TValue ? (
            TMode extends { shallo: true } ? (
                TValue
            ) : Only.ResolveRequired<TValue, TMode>
        ) : never;
    } : T;
}