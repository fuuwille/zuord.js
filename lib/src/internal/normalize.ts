import { InternalZuord } from "./index";

const normalize = <T>(obj : T) => {
    return obj as InternalZuord.Normalize<T>;
}

export { normalize as zuordNormalize };