import { ZuordType } from ".";

export type Primitive = string | number | boolean | bigint | symbol | null | undefined;

export type PrimitiveArray = ZuordType.Array<Primitive>;