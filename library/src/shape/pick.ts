import { zuordType as type } from "@zuord/type";
import { PickSource } from "./pick.types";

export function pickPlain(obj: unknown): obj is PickSource {
    return type.plain(obj);
}