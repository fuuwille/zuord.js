import { zuordType } from "@zuord/type";
import { integrate } from "./integrate";
import { MergeContent } from "./merge.types";

export function mergeContent(obj: unknown): obj is MergeContent {
    return zuordType.arrayOf(obj, integrate);
}