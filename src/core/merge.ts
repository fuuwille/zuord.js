import * as Zuord from "@/core/alias.compile"
import * as zuordUtil from "@/util/alias.runtime";
import * as ZuordUtil from "@/util/alias.compile";

function merge<U extends object[], const M extends Zuord.IntegrateMode[]>(content: [...U], mode?: [...M]): Zuord.Merge<U, ZuordUtil.UnionOf<M>> {
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
                result[key] = merge([existing, value], mode);
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