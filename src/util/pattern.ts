import { Zuord } from "@/core/alias.types";

function pattern<T extends object, S extends Zuord.Pattern<T>>(_: T, sch: S): S {
    return sch;
}

export { pattern as zuordPattern };
