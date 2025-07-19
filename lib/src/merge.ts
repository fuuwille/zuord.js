import { Zuord } from "zuord";
import { internalZuord } from "./internal";

export const merge = <TContent extends object[], TMode extends Partial<Zuord.MergeBaseMode> = Zuord.MergeDefaultMode>
    (content: [...TContent], mode?: TMode) : Zuord.Merge<TContent, Zuord.MergeResolvedMode<TMode>> => internalZuord.merge(content, mode);