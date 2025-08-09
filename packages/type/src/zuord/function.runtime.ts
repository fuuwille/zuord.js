import { ZuordType as Type } from ".";

export function func<TArgs extends unknown[], TResult extends unknown = unknown>(obj : unknown): obj is Type.Function<TArgs, TResult> {
    if (typeof obj !== "function") return false;

    return true;
}