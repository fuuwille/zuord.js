import { zuordCore } from "@zuord/core";
import { zuordType, ZuordType } from "@zuord/type";
import { IntegrateMode } from "./integrate.types";

export function integrate<TBase, TInput, TMode>(base: TBase, input: TInput, mode: TMode) {
    const { shallow, concat, unique } = mode as IntegrateMode;

    if(zuordType.array(base) && zuordType.array(input)) {
        return concat ? ( unique 
            ? Array.from(new Set([...base, ...input])) 
            : [...base, ...input]
        ) : input;
    }

    if(zuordType.plain(base) && zuordType.plain(input)) {

        const result: any = {};
        const stack: Array<{ target: ZuordType.Plain; sourceA: ZuordType.Plain; sourceB: ZuordType.Plain }> = [{ target: result, sourceA: base, sourceB: input }];

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