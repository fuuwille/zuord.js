import { ZuordType } from ".";

export type UnionOf<U extends ZuordType.Tuple> = U[number]

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type UnionToLast<U> = UnionToIntersection<U extends any ? () => U : never> extends () => infer L ? L : never;

export type UnionToTuple<U, R extends any[] = []> = [U] extends [never]? R : UnionToTuple<Exclude<U, UnionToLast<U>>, [UnionToLast<U>, ...R]>;