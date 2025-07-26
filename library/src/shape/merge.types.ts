import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";
import { IntegrateSource } from "./integrate.types";

export type MergeContent = Type.ArrayOf<IntegrateSource>;

export type MergeMode = Partial<Internal.MergeMode>;