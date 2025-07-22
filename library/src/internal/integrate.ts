import { zuordCore } from "@zuord/core";
import { ZuordType, zuordType } from "@zuord/type";
import { IntegrateMode, Integrate, IntegratePlain, IntegrateArray } from "./integrate.types";

export const integrate = <A, B, TMode extends Partial<IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    let integrated;

    if (Array.isArray(a) && Array.isArray(b)) {
        integrated = integrateArray(a, b, mode);
    }
    else if(zuordType.plain(a) && zuordType.plain(b)) {
        integrated = integratePlain(a, b, mode);
    }   
    else {
        integrated = b;
    } 

    return integrated as Integrate<A, B, TMode>;
}

export const integrateArray = <A extends ZuordType.Array, B extends ZuordType.Array, TMode extends Partial<IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    let integrated : ZuordType.Array;

    if (mode?.concat) {
        integrated = [...a, ...b];
    } else {
        integrated = b;
    }

    return integrated as IntegrateArray<A, B, TMode>;
}

export const integratePlain = <A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends Partial<IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    const integrated : ZuordType.Plain = {};

    const shallow = mode?.shallow === true;

    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

    keys.forEach((key) => {
        if (shallow) {
            if (key in a) {
                integrated[key] = a[key];
            } else if (key in b) {
                integrated[key] = b[key];
            }
        } else {
            const valA = key in a ? a[key] : undefined;
            const valB = key in b ? b[key] : undefined;

            integrated[key] = valB == undefined ? valA : integrate(valA, valB, mode);
        }
    });

    return integrated as IntegratePlain<A, B, TMode>;
}

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies IntegrateMode;