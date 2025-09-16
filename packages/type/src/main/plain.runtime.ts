import { fundType } from "./fundType";
import type { ZuordType, ZuordPlain } from ".";

export function array<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is ZuordPlain.Array<TKey, TItem> {
    return fundType.array(obj, { item: (item): item is ZuordType.Plain<TKey, TItem> => fundType.plain(item, type) });
}

export function tuple<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is ZuordPlain.Tuple<TKey, TItem> {
    return fundType.tuple(obj, { item: (item): item is ZuordType.Plain<TKey, TItem> => fundType.plain(item, type) });
}