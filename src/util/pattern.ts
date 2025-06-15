import * as ZuordUtil from "@/util/alias.types";

function pattern<T extends object, S extends ZuordUtil.Pattern<T>>(_: T, sch: S): S {
    return sch;
}

export { pattern as zuordPattern };
