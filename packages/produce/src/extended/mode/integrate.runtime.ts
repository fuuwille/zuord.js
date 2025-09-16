import { $zuordMode } from "../../internal";

import type { ZuordXMode } from ".";

export const loose = $zuordMode.integrate.plain satisfies ZuordXMode.Integrate.Loose;

export const restrict = $zuordMode.integrate.plain satisfies ZuordXMode.Integrate.Restrict;

export const array = $zuordMode.integrate.array satisfies ZuordXMode.Integrate.Array;