import { Zuord } from "zuord";
import { internalZuord } from "./internal";

export const merge = <TContent extends object[], const TMode extends Zuord.MergeBaseMode = Zuord.MergeDefaultMode>
    (content: [...TContent], mode?: TMode) : Zuord.Merge<TContent, TMode> => internalZuord.merge(content, mode);