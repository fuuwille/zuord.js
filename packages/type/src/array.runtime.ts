import { zuordType } from "./type";
import type { ZuordType, ZuordArray } from "@zuord/type";

export function nest<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is ZuordArray.Nest<T> {
  return zuordType.array(obj, { item: (item): item is ZuordType.Array<T> => zuordType.array(item, type) });
}

export function empty(obj: unknown): obj is ZuordArray.Empty {
  return zuordType.array(obj) && obj.length === 0;
}