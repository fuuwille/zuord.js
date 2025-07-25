import { zuordType } from "@zuord/type";
import { Integrate } from "./integrate.types";

export const integrate = (obj: unknown) : obj is Integrate => {
    return zuordType.plain(obj) || zuordType.array(obj);
}