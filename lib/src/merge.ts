import { Zuord } from "zuord";
import { InternalZuord, internalZuord } from "./internal";

type MergeModeWithDefault<T extends Partial<InternalZuord.MergeBaseMode>> =
  Required<Omit<InternalZuord.MergeDefaultMode, keyof T> & T>;

export const merge = <TContent extends object[], TMode extends Partial<Zuord.MergeBaseMode> = Zuord.MergeDefaultMode>
    (content: [...TContent], mode?: TMode) : InternalZuord.Normalize<MergeModeWithDefault<TMode>> => internalZuord.merge(content, mode);

    