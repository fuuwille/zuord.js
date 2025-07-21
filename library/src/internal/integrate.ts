import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";
import { ZuordType, zuordType } from "@zuord/type";

export const integrate = <A, B, TMode extends Internal.IntegrateMode>(a: A, b: B, mode: TMode) => {
    const concat = mode.concat ?? false;
    const shallow = mode.shallow ?? false;

    if (Array.isArray(a) && Array.isArray(b)) {
        if (concat) {
            return [...a, ...b];
        } else {
            return b;
        }
    }

    if(zuordType.plain(a) && zuordType.plain(b)) {
        const integrated : ZuordType.Plain = {};

        const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

        for (const key of keys) {
            if (!shallow) {
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
}

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateMode;