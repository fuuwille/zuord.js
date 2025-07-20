import { InternalZuord as Internal, internalZuord as internal } from "./index"
import { zuordType } from "@zuord/type";

export const merge = <TContent extends object[], TMode extends Partial<Internal.MergeBaseMode>> (content: [...TContent], mode?: TMode) => {

    if (content.length === 0) {
        // If no content is provided, return an empty object
        return {};
    }

    const result: Record<string, unknown> = {};
    
    for (const obj of content) {
        if (!zuordType.isObject(obj)) continue;

        // Iterate over each key-value pair in the object
        for (const [key, value] of Object.entries(obj)) {
            const existing = result[key];

            // If the key already exists, we need to merge
            if (Array.isArray(value) && Array.isArray(existing) && mode?.["concat"]) {
                // Combine arrays
                result[key] = [...existing, ...value];
            } else if (zuordType.isObject(value) && zuordType.isObject(existing)) {
                // Recursively merge objects
                result[key] = merge([existing, value], mode);
            } else {
                // In other cases, just set the value
                result[key] = value;
            }
        }
    }

    // Return the merged result as a normalized object
    return result;
}

export const mergeBaseMode = internal.integrateBaseMode satisfies Internal.MergeBaseMode;