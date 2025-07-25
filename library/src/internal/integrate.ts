import { zuordCore } from "@zuord/core";
import { zuordType, ZuordType } from "@zuord/type";
import { IntegrateMode, IntegrateShape } from "./integrate.types";

export function integrate<A, B, TMode>(a: A, b: B, mode: TMode) {
    const { shallow, concat, unique } = mode as IntegrateMode;

    if(Array.isArray(a) && Array.isArray(b)) {
        return concat ? ( unique 
            ? Array.from(new Set([...a, ...b])) 
            : [...a, ...b]
        ) : b;
    }

    if(zuordType.plain(a) && zuordType.plain(b)) {

        const result: any = {};
        const stack: Array<{ target: ZuordType.Plain; sourceA: ZuordType.Plain; sourceB: ZuordType.Plain }> = [{ target: result, sourceA: a, sourceB: b }];

        while (stack.length) {
            const { target, sourceA, sourceB } = stack.pop()!;

            if (shallow) {
                Object.assign(target, sourceA, sourceB);
                continue;
            }

            const keys = new Set([...Object.keys(sourceA || {}), ...Object.keys(sourceB || {})]);

            keys.forEach(key => {
                const valA = sourceA?.[key];
                const valB = sourceB?.[key];

                if (Array.isArray(valA) && Array.isArray(valB)) {
                    target[key] = concat ? (
                        unique ? Array.from(new Set([...valA, ...valB])) 
                        : [...valA, ...valB]
                    ) : valB;
                } else if (valB !== undefined && zuordType.plain(valA) && zuordType.plain(valB)) {
                    stack.push({ target: target[key] = {}, sourceA: valA, sourceB: valB });
                } else if (valB !== undefined) {
                    target[key] = valB;
                } else {
                    target[key] = valA;
                }
            });
        }

        return result;
    }

    throw new TypeError("Both arguments must be either plain objects or arrays.");
}

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode, zuordCore.uniqueMode]) satisfies IntegrateMode;
export const integrateShape = (obj: unknown) : obj is IntegrateShape => {
    return zuordType.plain(obj) || Array.isArray(obj);
}