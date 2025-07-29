import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";
import { Object } from "./integrate.types";

export type MergeContent = Type.ArrayOf<Object>;

export type MergeMode = Partial<Internal.Mode.Merge>;