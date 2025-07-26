import { zuordType as type } from "@zuord/type";
import { PickPlain } from "./pick.types";

export function pickPlain(obj: unknown): obj is PickPlain {
    return type.plain(obj);
}