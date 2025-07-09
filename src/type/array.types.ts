
// ARRAY

type Array = readonly unknown[];

export type { Array as ZuordArray };


// ARRAY INFER

type ArrayInfer<T> = T extends readonly (infer TInfer)[] ? TInfer : never;

export type { ArrayInfer as ZuordArrayInfer };


// ARRAY DEPTH

type ArrayDepth<T, D extends unknown[] = []> = T extends readonly (infer U)[] ? (
    ArrayDepth<U, [unknown, ...D]> 
) : D['length'];

export type { ArrayDepth as ZuordArrayDepth };


// EMPTY ARRAY

type EmptyArray = readonly [];

export type { EmptyArray as ZuordEmptyArray };