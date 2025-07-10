import { Zuord } from "../core/alias.types";

function pattern<T extends object, P extends Zuord.Pattern<T> = Zuord.Pattern<T>>(pattern: P) {
    return pattern as P;
}

export { pattern as zuordPattern };
