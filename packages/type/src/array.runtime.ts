import { ZuordType as Type } from "./type";
import { zuordType } from "./type";
import { ZuordArray } from "./array.types";

export function nest<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is ZuordArray.Nest<T> {
  return zuordType.array(obj, { item: (item): item is Type.Array<T> => zuordType.array(item, type) });
}