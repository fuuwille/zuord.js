import { zuordType } from "@zuord/type";
import { IntegrateSource, IntegrateMode } from "./integrate.types";

export const integrateSource = (obj: unknown) : obj is IntegrateSource => {
    return zuordType.plain(obj) || zuordType.array(obj);
}

export const integrateMode = (obj: unknown): obj is IntegrateMode => {
    return zuordType.plain(obj);
};