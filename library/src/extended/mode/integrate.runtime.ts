import { $zuordMode } from "../../internal";

import type { ZuordModeX } from ".";

export const loose = $zuordMode.integrate.plain satisfies ZuordModeX.Integrate.Loose;

export const restrict = $zuordMode.integrate.plain satisfies ZuordModeX.Integrate.Restrict;

export const array = $zuordMode.integrate.array satisfies ZuordModeX.Integrate.Array;