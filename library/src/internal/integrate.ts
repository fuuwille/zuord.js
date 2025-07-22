import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";
import { ZuordType, zuordType } from "@zuord/type";

export const integrate = <A, B, TMode extends Partial<Internal.IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    if(a == undefined) {
        return b;
    }

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

    return integrated as Internal.Integrate<A, B, TMode>;
}

export const integrateArray = <A extends ZuordType.Array, B extends ZuordType.Array, TMode extends Partial<Internal.IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    let integrated : ZuordType.Array;

    if (mode?.concat) {
        integrated = [...a, ...b];
    } else {
        integrated = b;
    }

    return integrated as Internal.IntegrateArray<A, B, TMode>;
}

export const integratePlain = <A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends Partial<Internal.IntegrateMode>>(a: A, b: B, mode?: TMode) => {
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

            console.log(`Integrating key: ${key}`, valA, valB);

            integrated[key] = integrate(valA, valB, mode);
        }
    });

    return integrated as Internal.IntegratePlain<A, B, TMode>;
}

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateMode;