import { Zuord } from "zuord";
import { internalZuord as internal } from "./internal";

export function merge <TContent extends object[], TMode extends Partial<Zuord.MergeBaseMode>>
(content: [...TContent], mode?: TMode) : Zuord.Merge<TContent, Zuord.MergeResolvedMode<TMode>> {
    return internal.merge(content, mode) as Zuord.Merge<TContent, Zuord.MergeResolvedMode<TMode>>;
}