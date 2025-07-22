import { ZuordType } from "@zuord/type";
import { integratePlain, integrateMode } from "./integrate";
import { MergeMode } from "./merge.types";

export const merge = <TContent extends ZuordType.TupleLike<ZuordType.Plain>, TMode extends Partial<MergeMode>> (content: TContent, mode?: TMode) : ZuordType.Plain => {
    if (content.length === 0) {
        return {};
    }

    const [head, ...rest] = content as [ZuordType.Plain, ...ZuordType.TupleLike<ZuordType.Plain>];

    let merged;

    if(rest.length === 0) {
        merged = head;
    }
    else if(rest.length === 1) {
        merged = integratePlain(head, rest[0], mode);
    }
    else {
        merged = integratePlain(head, merge(rest, mode), mode);
    }

    return merged;
}

export const mergeMode = integrateMode satisfies MergeMode;