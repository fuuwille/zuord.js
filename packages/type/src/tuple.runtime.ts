import { array } from "./array";
import { Tuple } from "./tuple.types";

export function tuple<T extends unknown = unknown>(obj: unknown, checkT?: (item: unknown) => item is T): obj is Tuple<T> {
    return array(obj, checkT);
}