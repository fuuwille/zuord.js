import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";
import { ZuordType, zuordType } from "@zuord/type";

export const integrate = <A, B, TMode extends Partial<Internal.IntegrateMode>>(a: A, b: B, mode?: TMode) => {
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

    return integrated;
}

export const integrateArray = <A extends ZuordType.Array, B extends ZuordType.Array, TMode extends Partial<Internal.IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    let integrated : ZuordType.Array;

    if (mode?.concat) {
        integrated = [...a, ...b];
    } else {
        integrated = b;
    }

    return integrated;
}

export const integratePlain = <A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends Partial<Internal.IntegrateMode>>(a: A, b: B, mode?: TMode) => {
    const integrated : ZuordType.Plain = {};

    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

    for (const key of keys) {
        if (!mode?.shallow) { // ? CHECK LATER
            integrated[key] = integrate(
                key in a ? a[key] : undefined,
                key in b ? b[key] : undefined,
                mode
            );
        } else {
            if (key in a) {
                integrated[key] = a[key];
            } else if (key in b) {
                integrated[key] = b[key];
            }
        }
    }

    return integrated;
}

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateMode;