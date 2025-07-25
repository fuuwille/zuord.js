import { zuordType } from "@zuord/type";
import { IntegrateElement } from "./integrate.types";

export const integrateElement = (obj: unknown) : obj is IntegrateElement => {
    return zuordType.plain(obj) || zuordType.array(obj);
}