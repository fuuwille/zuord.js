import { zuordType } from "./type";
import type { ZuordType, ZuordPlain } from "@zuord/type";

export function array<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is ZuordPlain.Array<TKey, TItem> {
    return zuordType.array(obj, { item: (item): item is ZuordType.Plain<TKey, TItem> => zuordType.plain(item, type) });
}

export function tuple<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is ZuordPlain.Tuple<TKey, TItem> {
    return zuordType.tuple(obj, { item: (item): item is ZuordType.Plain<TKey, TItem> => zuordType.plain(item, type) });
}