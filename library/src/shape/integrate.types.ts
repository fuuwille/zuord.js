import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";

export type Object = Plain | Array;

export type Plain = Type.Plain;

export type Array = Type.Array;

export type Mode = Partial<Internal.Mode.Integrate>;