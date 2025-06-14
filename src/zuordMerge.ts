import { DeepMerge } from "./utils/deepMerge";
import { isObject } from "./utils/isObject";
import { ZuordNormalize } from "./zuordNormalize";

export type ZuordMerge<U extends object[]> = ZuordNormalize<ZuordMergeRaw<U>>

export type ZuordMergeRaw<U extends object[]> = U extends [...infer Rest extends object[], infer Head extends object]
    ? DeepMerge<ZuordMergeRaw<Rest>, Head>
    : {};

export function zuordMerge<U extends object[]>(...content: U): ZuordMerge<U> {
    if (content.length === 0) {
        return {} as ZuordMerge<U>;
    }

    const result: Record<string, unknown> = {};

    for (const obj of content) {
        if (!isObject(obj)) continue;

        for (const [key, value] of Object.entries(obj)) {
            if (isObject(value) && isObject(result[key])) {
                result[key] = zuordMerge(result[key] as object, value as object);
            } else {
                result[key] = value;
            }
        }
    }

    return result as ZuordMerge<U>;
}