import { Pattern } from "./pattern.types";

export function pattern<T extends object, P extends Pattern<T> = Pattern<T>>(pattern: P) {
    return pattern as P;
}