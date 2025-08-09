import { array } from "./array";
import type { ZuordType as Type } from ".";

export function tuple<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is Type.Tuple<T> {
    return array(obj, type);
}

export function tupleFirst<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]>(obj: unknown, type?: { first?: (z: unknown) => z is TFirst, rest?: (z: unknown) => z is TRest }): obj is Type.TupleFirst<TFirst, TRest> {
    if (!tuple(obj)) return false;
    if (obj.length < 1) return false;

    if (type) {
        const [first, ...rest] = obj;
        if (type.first && !type.first(first)) return false;
        if (type.rest && !type.rest(rest)) return false;
    }

    return true;
}

export function tupleLast<TRest extends unknown[] = unknown[], TLast extends unknown = unknown>(obj: unknown, type?: { rest?: (z: unknown) => z is TRest, last?: (z: unknown) => z is TLast }): obj is Type.TupleLast<TRest, TLast> {
    if (!tuple(obj)) return false;
    if (obj.length < 1) return false;

    if (type) {
        if (type.rest) {
            for (let i = 0; i < obj.length - 1; i++) {
                if (!type.rest(obj[i])) return false;
            }
        }

        if (type.last) {
            const last = obj[obj.length - 1];
            if (!type.last(last)) return false;
        }
    }

    return true;
}