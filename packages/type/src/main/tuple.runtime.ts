import { fundType } from "./fundType";
import type { ZuordTuple } from ".";

export function first<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]>(obj: unknown, type?: { first?: (z: unknown) => z is TFirst, rest?: (z: unknown) => z is TRest }): obj is ZuordTuple.First<TFirst, TRest> {
    if (!fundType.tuple(obj)) return false;
    if (obj.length < 1) return false;

    if (type) {
        const [first, ...rest] = obj;
        if (type.first && !type.first(first)) return false;
        if (type.rest && !type.rest(rest)) return false;
    }

    return true;
}

export function last<TLast extends unknown = unknown, TRest extends unknown[] = unknown[]>(obj: unknown, type?: { last?: (z: unknown) => z is TLast, rest?: (z: unknown) => z is TRest }): obj is ZuordTuple.Last<TLast, TRest> {
    if (!fundType.tuple(obj)) return false;
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

export function nest<TItem extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is TItem }): obj is ZuordTuple.Nest<TItem> {
    return fundType.tuple(obj, { item: (item): item is ZuordTuple.Nest<TItem> => fundType.tuple<TItem>(item, type) });
}