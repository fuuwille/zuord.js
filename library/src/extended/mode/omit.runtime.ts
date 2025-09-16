import type { ZuordXMode } from ".";
import { $zuordMode } from "../../internal";

export const loose = $zuordMode.omit.plain satisfies ZuordXMode.Omit.Loose;