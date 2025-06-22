import { Zuord } from "@/core/alias.types";

const normalize = <T>(obj : T) => {
    return obj as Zuord.Normalize<T>;
}

export { normalize as zuordNormalize };