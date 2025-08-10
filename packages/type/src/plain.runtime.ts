import { zuordType, ZuordType } from "./type";
import { ZuordPlain } from "./plain.types";

export function plainArray<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is ZuordPlain.Array<TKey, TItem> {
    return zuordType.array(obj, { item: (item): item is ZuordType.Plain<TKey, TItem> => zuordType.plain(item, type) });
}