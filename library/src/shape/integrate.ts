import { zuordType } from "@zuord/type";
import { IntegrateElement, IntegrateMode } from "./integrate.types";

export const integrateElement = (obj: unknown) : obj is IntegrateElement => {
    return zuordType.plain(obj) || zuordType.array(obj);
}

export const integrateMode = (obj: unknown): obj is IntegrateMode => {
    return zuordType.plain(obj);
};