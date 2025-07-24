import { zuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { IntegrateMode, IntegrateShape } from "./integrate.types";

export function integrate<A extends IntegrateShape, B extends IntegrateShape, TMode extends Partial<IntegrateMode>>(a: A, b: B, mode?: TMode) {
    const { shallow, concat } = mode ?? {};

    if (shallow) {
        return { ...a, ...b };
    }

    const result: any = {};
    const stack: Array<{ target: any; sourceA: any; sourceB: any }> = [{ target: result, sourceA: a, sourceB: b }];

    while (stack.length) {
        const { target, sourceA, sourceB } = stack.pop()!;

        const keys = new Set([...Object.keys(sourceA || {}), ...Object.keys(sourceB || {})]);

        keys.forEach(key => {
            const valA = sourceA?.[key];
            const valB = sourceB?.[key];

            if (concat && Array.isArray(valA) && Array.isArray(valB)) {
                target[key] = [...valA, ...valB];
            } else if (valB !== undefined && isPlain(valA) && isPlain(valB)) {
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


export function isPlain(obj: unknown) : obj is ZuordType.Plain {
    if (typeof obj !== "object" || obj === null) return false;

    return Object.getPrototypeOf(obj) === Object.prototype;
}