import { integrate, integrateMode } from "./integrate";
import { MergeMode } from "./merge.types";

export const merge = <TContent, TMode>(content: TContent, mode: TMode)=> {
    if (!Array.isArray(content) || content.length == 0) return {};

    return content.reduce((acc, current) => {
        if (acc === undefined) return current;
        return integrate(acc, current, mode);
    });
}

export const mergeMode = integrateMode satisfies MergeMode;