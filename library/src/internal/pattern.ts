import { InternalZuord } from ".";

export function pattern<T extends object, P extends InternalZuord.Pattern<T> = InternalZuord.Pattern<T>>(pattern: P) {
    return pattern as P;
}