import { zuordCore } from "@zuord/core";
import { zuordType } from "@zuord/type";
import { IntegrateMode } from "./integrate.types";

export function integrate<A extends object, B extends object>(a: A, b: B, mode?: Partial<IntegrateMode>) {
    const { shallow, concat } = mode ?? {};

    if (shallow) {
        return { ...a, ...b };
    }

    const result: any = {};
    const stack: Array<{ target: any; sourceA: any; sourceB: any }> = [{ target: result, sourceA: a, sourceB: b }];

    while (stack.length) {
        const { target, sourceA, sourceB } = stack.pop()!;

        // Tüm keyler union'u
        const keys = new Set([...Object.keys(sourceA || {}), ...Object.keys(sourceB || {})]);

        keys.forEach(key => {
            const valA = sourceA?.[key];
            const valB = sourceB?.[key];

            if (concat && Array.isArray(valA) && Array.isArray(valB)) {
                target[key] = [...valA, ...valB];
            } else if (valB !== undefined && zuordType.plain(valA) && zuordType.plain(valB)) {
                target[key] = {};
                stack.push({ target: target[key], sourceA: valA, sourceB: valB });
            } else if (valB !== undefined) {
                target[key] = valB;
            } else {
                target[key] = valA;
            }
        });
    }

    return result;
}

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies IntegrateMode;