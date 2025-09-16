import { fundType } from "./fundType";
import type { FundType, ArrayType } from ".";

export function nest<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is ArrayType.Nest<T> {
  return fundType.array(obj, { item: (item): item is FundType.Array<T> => fundType.array(item, type) });
}

export function empty(obj: unknown): obj is ArrayType.Empty {
  return fundType.array(obj) && obj.length === 0;
}