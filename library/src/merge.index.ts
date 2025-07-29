import * as m_merge from "./merge";

type MergeAPI = {
    plain: typeof m_merge.plain;
    array: typeof m_merge.array;
}

export const merge: MergeAPI = m_merge;

export { Merge } from "./merge.types";