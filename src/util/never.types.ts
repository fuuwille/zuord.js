type IsNever<T> = [T] extends [never] ? true : false;

type SomeIsNever<U extends readonly unknown[]> = U extends readonly [infer First, ...infer Rest]
    ? (IsNever<First> extends true ? true : SomeIsNever<Rest>) 
    : false;

export type { IsNever as ZuordIsNever };
export type { SomeIsNever as ZuordSomeIsNever };