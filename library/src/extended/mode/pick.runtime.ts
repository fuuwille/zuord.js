import type { ZuordModeX } from ".";
import { $zuordMode } from "library/src/internal";

export const loose = $zuordMode.pick.plain satisfies ZuordModeX.Pick.Loose;