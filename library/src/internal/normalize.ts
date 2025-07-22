import { Normalize } from "./normalize.types";

const normalize = <T>(obj : T) => {
    return obj as Normalize<T>;
}

export { normalize as zuordNormalize };