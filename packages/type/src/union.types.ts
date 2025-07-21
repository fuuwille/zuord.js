import { ZuordType } from ".";

export type UnionOf<U extends ZuordType.Tuple> = U[number]