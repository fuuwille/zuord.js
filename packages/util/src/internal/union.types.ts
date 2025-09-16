export type IsUnion<T, U = T> = T extends any ? ([U] extends [T] ? false : true) : never;

export type ToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type ToLast<U> = ToIntersection<U extends any ? () => U : never> extends () => infer L ? L : never;

export type ToTuple<U, R extends any[] = []> = [U] extends [never]? R : ToTuple<Exclude<U, ToLast<U>>, [ToLast<U>, ...R]>;