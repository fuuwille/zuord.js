import type { ZuordModeX } from ".";
import { $zuordMode } from "../../internal";

export const loose = $zuordMode.pick.plain satisfies ZuordModeX.Pick.Loose;