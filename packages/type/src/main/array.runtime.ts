import { fundType } from "./fundType";
import type { ZuordType, ZuordArray } from ".";

export function nest<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is ZuordArray.Nest<T> {
  return fundType.array(obj, { item: (item): item is ZuordType.Array<T> => fundType.array(item, type) });
}

export function empty(obj: unknown): obj is ZuordArray.Empty {
  return fundType.array(obj) && obj.length === 0;
}