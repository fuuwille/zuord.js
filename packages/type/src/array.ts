export type Array = readonly unknown[];

export type ArrayEmpty = readonly [];

export type ArrayLike<T> = readonly T[];

export type ArrayInfer<T> = T extends readonly (infer TInfer)[] ? TInfer : never;

export type ArrayDepth<T> = ArrayDepthImpl<T, []>;

type ArrayDepthImpl<T, D extends Array> = T extends readonly (infer U)[] ? (
    ArrayDepthImpl<U, [unknown, ...D]>
) : D['length'];