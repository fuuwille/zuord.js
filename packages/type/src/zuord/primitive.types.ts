import { ZuordType as Type } from ".";

export type Primitive = string | number | boolean | bigint | symbol | null | undefined;

export type PrimitiveArray = Type.Array<Primitive>;

export type PrimitiveTuple = Type.Tuple<Primitive>;