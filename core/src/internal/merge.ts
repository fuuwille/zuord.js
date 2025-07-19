import { Zuord } from "./index"
import { zuordType } from "@zuord/type";

export function merge<U extends object[]>(...content: U) : Zuord.Merge<U> {
    return mergeBy({
        content
    }) as Zuord.Merge<U>;
}

export function mergeBy<U extends object[], const C extends Zuord.OutcastConstructor[] = Zuord.DefaultOutcastConstructors, const M extends Partial<Zuord.MergeMode> = Zuord.MergeDefaultMode>(data : Zuord.DataOf<U, C, M> ): Zuord.Merge<U, Zuord.OptionsOf<typeof data>> {
    if (data.content.length === 0) {
        // If no content is provided, return an empty object
        return {} as Zuord.Merge<U, Zuord.OptionsOf<typeof data>>;
    }

    const result: Record<string, unknown> = {};
    
    for (const obj of data.content) {
        if (!zuordType.isObject(obj)) continue;

        // Iterate over each key-value pair in the object
        for (const [key, value] of Object.entries(obj)) {
            const existing = result[key];

            // If the key already exists, we need to merge
            if (Array.isArray(value) && Array.isArray(existing)/* && mode?.includes("concat" as any)*/) {
                // Combine arrays
                result[key] = [...existing, ...value];
            } else if (zuordType.isObject(value) && zuordType.isObject(existing)) {
                // Recursively merge objects
                result[key] = mergeBy({
                    content: [existing as object, value as object],
                    mode: data.mode
                });
            } else {
                // In other cases, just set the value
                result[key] = value;
            }
        }
    }

    // Return the merged result as a normalized object
    return result as Zuord.Merge<U, Zuord.OptionsOf<typeof data>>;
}