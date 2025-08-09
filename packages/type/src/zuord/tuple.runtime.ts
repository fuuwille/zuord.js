import { array } from "../array";
import type { ZuordType as Type } from ".";

export function tuple<T extends unknown = unknown>(obj: unknown, checkT?: (item: unknown) => item is T): obj is Type.Tuple<T> {
    return array(obj, checkT);
}