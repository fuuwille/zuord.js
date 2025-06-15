import * as Zuord from "@/core/alias.compile"
import * as zuordUtil from "@/util/alias.runtime";
import * as ZuordUtil from "@/util/alias.compile";

//

type Merge<U extends object[], Mode extends Zuord.IntegrateModeType = ""> = ZuordUtil.Normalize<MergeRaw<U, Mode>>

type MergeRaw<U extends object[], Mode extends Zuord.IntegrateModeType = ""> = U extends [...infer Rest extends object[], infer Head extends object]
    ? Zuord.Integrate<MergeRaw<Rest, Mode>, Head, Mode>
    : {};

function merge<U extends object[], const Mode extends Zuord.IntegrateModeType>(content: [...U], mode? : Mode): Merge<U, Mode> {
    if (content.length === 0) {
        // If no content is provided, return an empty object
        return {} as Merge<U, Mode>;
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
                result[key] = merge([existing as object, value as object], mode);
            } else {
                // In other cases, just set the value
                result[key] = value;
            }
        }
    }

    // Return the merged result as a normalized object
    return result as Merge<U, Mode>;
}

//

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export { merge as zuordMerge };