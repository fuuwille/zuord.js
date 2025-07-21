import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";
import { ZuordType, zuordType } from "@zuord/type";

export const integrate = <A, B, TMode extends Internal.IntegrateMode>(a: A, b: B, mode: TMode) => {
    const concat = mode.concat ?? false;
    const shallow = mode.shallow ?? false;

    if (Array.isArray(a) && Array.isArray(b)) {
        return integrateArray(a, b, mode);
    }

    if(zuordType.plain(a) && zuordType.plain(b)) {
        return integratePlain(a, b, mode);
    }
}

export const integrateArray = <A extends ZuordType.Array, B extends ZuordType.Array, TMode extends Internal.IntegrateMode>(a: A, b: B, mode: TMode) => {
    if (mode.concat) {
        return [...a, ...b];
    } else {
        return b;
    }
}

export const integratePlain = <A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends Internal.IntegrateMode>(a: A, b: B, mode: TMode) => {
    const integrated : ZuordType.Plain = {};

    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

    for (const key of keys) {
        if (!mode.shallow) { // ? CHECK LATER
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