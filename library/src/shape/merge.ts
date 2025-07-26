import { zuordType } from "@zuord/type";
import { integrateSource } from "./integrate";
import { MergeContent, MergeMode } from "./merge.types";

export function mergeContent(obj: unknown): obj is MergeContent {
    return zuordType.arrayOf(obj, integrateSource);
}

export function mergeMode(obj: unknown): obj is MergeMode {
    return zuordType.plain(obj);
}