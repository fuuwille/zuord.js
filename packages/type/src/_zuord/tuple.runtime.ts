import { array } from "./array";
import type { ZuordType as Type } from ".";

export function tuple<TItem extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is TItem }): obj is Type.Tuple<TItem> {
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

export function tupleLast<TLast extends unknown = unknown, TRest extends unknown[] = unknown[]>(obj: unknown, type?: { last?: (z: unknown) => z is TLast, rest?: (z: unknown) => z is TRest }): obj is Type.TupleLast<TLast, TRest> {
    if (!tuple(obj)) return false;
    if (obj.length < 1) return false;

    if (type) {
        if (type.last) {
            const last = obj[obj.length - 1];
            if (!type.last(last)) return false;
        }

        if (type.rest) {
            const rest = obj.slice(0, obj.length - 1);
            if (!type.rest(rest)) return false;
        }
    }

    return true;
}

export function tupleNest<TItem extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is TItem }): obj is Type.TupleNest<TItem> {
  return tuple(obj, { item: (item): item is Type.Tuple<TItem> => tuple<TItem>(item, type) });
}