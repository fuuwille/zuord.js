import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";

export type IntegrateSource = Type.Array | Type.Plain;

export type IntegrateMode = Partial<Internal.IntegrateMode>;