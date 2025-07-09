type Array = readonly unknown[];

type ArrayInfer<T> = T extends readonly (infer TInfer)[] ? TInfer : never;

type EmptyArray = readonly [];


export type { Array as ZuordArray };

export type { ArrayInfer as ZuordArrayInfer };

export type { EmptyArray as ZuordEmptyArray };