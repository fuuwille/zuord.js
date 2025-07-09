
// ARRAY

type Array = readonly unknown[];

export type { Array as ZuordArray };


// ARRAY INFER

type ArrayInfer<T> = T extends readonly (infer TInfer)[] ? TInfer : never;

export type { ArrayInfer as ZuordArrayInfer };


// ARRAY DEPTH

type ArrayDepth<T> = ArrayDepthImpl<T, []>;

export type { ArrayDepth as ZuordArrayDepth };

type ArrayDepthImpl<T, D extends any[]> = T extends readonly (infer U)[] ? (
    ArrayDepthImpl<U, [unknown, ...D]>
) : D['length'];


// EMPTY ARRAY

type EmptyArray = readonly [];

export type { EmptyArray as ZuordEmptyArray };