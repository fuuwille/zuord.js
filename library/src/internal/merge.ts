import { ZuordType } from "@zuord/type";
import { integrate, integrateMode } from "./integrate";
import { MergeMode } from "./merge.types";

export const merge = <TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> (content: TContent, mode?: TMode) : ZuordType.Plain => {
    if (content.length === 0) return {};

    return content.reduce((acc, current) => {
        if (acc === undefined) return current;
        return integrate(acc, current, mode);
    });
}

export const mergeMode = integrateMode satisfies MergeMode;