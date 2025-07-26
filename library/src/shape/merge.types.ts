import { ZuordType as Type } from "@zuord/type";
import { IntegrateElement } from "./integrate.types";
import { InternalZuord as Internal } from "zuord/internal";

export type MergeContent = Type.ArrayOf<IntegrateElement>;

export type MergeMode = Partial<Internal.MergeMode>;