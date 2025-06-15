import { Zuord, zuordUtil, ZuordUtil } from "@"

//

type Merge<U extends object[], O extends string = ""> = ZuordUtil.Normalize<MergeRaw<U, O>>

type MergeRaw<U extends object[], O extends string = ""> = U extends [...infer Rest extends object[], infer Head extends object]
    ? Zuord.Integrate<MergeRaw<Rest, O>, Head, O>
    : {};

function merge<U extends object[], const O extends string>(content: [...U], options? : O): Merge<U, O> {
    if (content.length === 0) {
        // If no content is provided, return an empty object
        return {} as Merge<U, O>;
    }

    const result: Record<string, unknown> = {};
    
    for (const obj of content) {
        if (!zuordUtil.isObject(obj)) continue;

        // Iterate over each key-value pair in the object
        for (const [key, value] of Object.entries(obj)) {
            const existing = result[key];

            // If the key already exists, we need to merge
            if (Array.isArray(value) && Array.isArray(existing)) {
                // Combine arrays
                result[key] = [...existing, ...value];
            } else if (zuordUtil.isObject(value) && zuordUtil.isObject(existing)) {
                // Recursively merge objects
                result[key] = merge([existing as object, value as object], options);
            } else {
                // In other cases, just set the value
                result[key] = value;
            }
        }
    }

    // Return the merged result as a normalized object
    return result as Merge<U, O>;
}

//

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export { merge as zuordMerge };