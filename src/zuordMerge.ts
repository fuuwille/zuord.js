import { DeepMerge } from "./utils/deepMerge";
import { isObject } from "./utils/isObject";
import { ZuordNormalize } from "./zuordNormalize";

export type ZuordMerge<U extends object[]> = ZuordNormalize<ZuordMergeRaw<U>>

export type ZuordMergeRaw<U extends object[]> = U extends [...infer Rest extends object[], infer Head extends object]
    ? DeepMerge<ZuordMergeRaw<Rest>, Head>
    : {};

export function zuordMerge<U extends object[]>(...content: U): ZuordMerge<U> {
    if (content.length === 0) {
        // If no content is provided, return an empty object
        return {} as ZuordMerge<U>;
    }

    const result: Record<string, unknown> = {};
    
    for (const obj of content) {
        if (!isObject(obj)) continue;

        // Iterate over each key-value pair in the object
        for (const [key, value] of Object.entries(obj)) {
            const existing = result[key];

            // If the key already exists, we need to merge
            if (Array.isArray(value) && Array.isArray(existing)) {
                // Combine arrays
                result[key] = [...existing, ...value];
            } else if (isObject(value) && isObject(existing)) {
                // Recursively merge objects
                result[key] = zuordMerge(existing as object, value as object);
            } else {
                // In other cases, just set the value
                result[key] = value;
            }
        }
    }

    // Return the merged result as a normalized object
    return result as ZuordMerge<U>;
}