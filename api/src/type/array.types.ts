
// ARRAY

type Array = readonly unknown[];

export type { Array as ZuordArray };


// EMPTY ARRAY

type EmptyArray = readonly [];

export type { EmptyArray as ZuordEmptyArray };


// ARRAY INFER

type ArrayInfer<T> = T extends readonly (infer TInfer)[] ? TInfer : never;

export type { ArrayInfer as ZuordArrayInfer };


// ARRAY DEPTH

type ArrayDepth<T> = ArrayDepthImpl<T, []>;

export type { ArrayDepth as ZuordArrayDepth };

type ArrayDepthImpl<T, D extends Array> = T extends readonly (infer U)[] ? (
    ArrayDepthImpl<U, [unknown, ...D]>
) : D['length'];