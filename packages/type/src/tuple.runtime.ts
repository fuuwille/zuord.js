import { zuordType } from "./type";
import type { ZuordTuple } from "./tuple.types";

export function first<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]>(obj: unknown, type?: { first?: (z: unknown) => z is TFirst, rest?: (z: unknown) => z is TRest }): obj is ZuordTuple.First<TFirst, TRest> {
    if (!zuordType.tuple(obj)) return false;
    if (obj.length < 1) return false;

    if (type) {
        const [first, ...rest] = obj;
        if (type.first && !type.first(first)) return false;
        if (type.rest && !type.rest(rest)) return false;
    }

    return true;
}