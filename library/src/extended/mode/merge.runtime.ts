import { integrate } from "./integrate";
import type { ZuordXMode } from ".";


//

export const loose = integrate.loose satisfies ZuordXMode.Merge.Loose;

export const array = integrate.array satisfies ZuordXMode.Merge.Array;