import { InternalZuord as Internal, internalZuord as internal } from "./index"
import { ZuordType, zuordType } from "@zuord/type";

export const merge = <TContent extends ZuordType.Plain[], TMode extends Partial<Internal.MergeMode>> (content: TContent, mode?: TMode) : ZuordType.Plain => {
    if (content.length === 0) return {};

    const [head, ...rest] = content;

    if(rest.length === 0) {
        return head;
    }
    else if(rest.length === 0) {
        return internal.integratePlain(head, rest[0], mode);
    }
    else {
        return internal.integratePlain(head, merge(rest, mode), mode);
    }
}

export const mergeMode = internal.integrateMode satisfies Internal.MergeMode;