import { Zuord } from "@/core/alias.types"
import * as zuordUtil from "@/util/alias";
import * as ZuordUtil from "@/util/alias.types";

function merge<U extends object[]>(...content: U) : Zuord.Merge<U> {
    return mergeBy({
        content
    }) as Zuord.Merge<U>;
}

function mergeBy<U extends object[], const M extends Zuord.MergeMode[] = []>({ content, mode } : Zuord.MergeOptions<U, M> ): Zuord.Merge<U, ZuordUtil.UnionOf<M>> {
    if (content.length === 0) {
        // If no content is provided, return an empty object
        return {} as Zuord.Merge<U, ZuordUtil.UnionOf<M>>;
    }

    const result: Record<string, unknown> = {};
    
    for (const obj of content) {
        if (!zuordUtil.isObject(obj)) continue;

        // Iterate over each key-value pair in the object
        for (const [key, value] of Object.entries(obj)) {
            const existing = result[key];

            // If the key already exists, we need to merge
            if (Array.isArray(value) && Array.isArray(existing) && mode?.includes("concat" as any)) {
                // Combine arrays
                result[key] = [...existing, ...value];
            } else if (zuordUtil.isObject(value) && zuordUtil.isObject(existing)) {
                // Recursively merge objects
                result[key] = mergeBy({
                    content: [existing as object, value as object],
                    mode
                });
            } else {
                // In other cases, just set the value
                result[key] = value;
            }
        }
    }

    // Return the merged result as a normalized object
    return result as Zuord.Merge<U, ZuordUtil.UnionOf<M>>;
}

export { merge as zuordMerge };
export { mergeBy as zuordMergeBy };