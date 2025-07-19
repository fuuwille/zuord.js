import { Zuord } from "./index";

export function pattern<T extends object, P extends Zuord.Pattern<T> = Zuord.Pattern<T>>(pattern: P) {
    return pattern as P;
}