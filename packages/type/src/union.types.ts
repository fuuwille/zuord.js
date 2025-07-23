import { ZuordType } from ".";

export type UnionOf<U extends ZuordType.Tuple> = U[number]

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I: never;