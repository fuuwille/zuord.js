
// ARRAY

type Array = readonly unknown[];

export type { Array as ZuordArray };


// ARRAY INFER

type ArrayInfer<T> = T extends readonly (infer TInfer)[] ? TInfer : never;

export type { ArrayInfer as ZuordArrayInfer };


// EMPTY ARRAY

type EmptyArray = readonly [];

export type { EmptyArray as ZuordEmptyArray };