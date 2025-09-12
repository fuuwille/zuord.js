import type { ZuordModeX } from ".";
import { $zuordMode } from "../../internal";

export const loose = $zuordMode.omit.plain satisfies ZuordModeX.Omit.Loose;