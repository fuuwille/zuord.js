import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";
import { IntegrateItem } from "./integrate.types";

export type MergeContent = Type.ArrayOf<IntegrateItem>;

export type MergeMode = Partial<Internal.MergeMode>;