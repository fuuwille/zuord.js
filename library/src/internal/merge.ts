import { InternalZuord as Internal, internalZuord as internal } from "."
import { ZuordType } from "@zuord/type";

export const merge = <TContent extends ZuordType.Plain[], TMode extends Partial<Internal.MergeMode>> (content: TContent, mode?: TMode) : ZuordType.Plain => {
    if (content.length === 0) {
        return {};
    }

    const [head, ...rest] = content;

    let merged;

    if(rest.length === 0) {
        merged = head;
    }
    else if(rest.length === 0) {
        merged = internal.integratePlain(head, rest[0], mode);
    }
    else {
        merged = internal.integratePlain(head, merge(rest, mode), mode);
    }

    return merged;
}

export const mergeMode = internal.integrateMode satisfies Internal.MergeMode;