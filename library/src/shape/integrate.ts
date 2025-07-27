import { zuordType } from "@zuord/type";
import { Item, Mode } from "./integrate.types";

export const integrateSource = (obj: unknown) : obj is Item => {
    return zuordType.plain(obj) || zuordType.array(obj);
}

export const integrateMode = (obj: unknown): obj is Mode => {
    return zuordType.plain(obj);
};