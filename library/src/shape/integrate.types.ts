import { ZuordType } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";

export type IntegrateElement = ZuordType.Array | ZuordType.Plain;

export type IntegrateMode = Partial<Internal.IntegrateMode>;