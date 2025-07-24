import { zuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { IntegrateMode, IntegrateShape } from "./integrate.types";

export function integrate<A, B, TMode>(a: A, b: B, mode: TMode) : IntegrateShape {
    const { shallow, concat } = mode as IntegrateMode;

    if(!(integrateShape(a))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if(!(integrateShape(b))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    const result: any = {};
    const stack: Array<{ target: IntegrateShape; sourceA: IntegrateShape; sourceB: IntegrateShape }> = [{ target: result, sourceA: a, sourceB: b }];

    while (stack.length) {
        const { target, sourceA, sourceB } = stack.pop()!;

        // shallow ise burada sadece yüzeysel merge yapıyoruz
        if (shallow) {
            Object.assign(target, sourceA, sourceB);
            continue; // derinlemesine gitmeden döngünün sonraki elemanına geç
        }

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

export const integrateShape = (obj: unknown) : obj is IntegrateShape => {
    return isPlain(obj) || Array.isArray(obj);
}