import { zuordType as type } from "@zuord/type";
import { OmitPlain } from "./omit.types";

export function omitPlain(obj: unknown): obj is OmitPlain {
    return type.plain(obj);
}