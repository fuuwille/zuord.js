import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";

export type Item = Type.Array | Type.Plain;

export type Mode = Partial<Internal.IntegrateMode>;