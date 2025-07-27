import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";
import { Item } from "./integrate.types";

export type MergeContent = Type.ArrayOf<Item>;

export type MergeMode = Partial<Internal.MergeMode>;