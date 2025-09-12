import { integrate } from "./integrate";
import type { ZuordModeX } from ".";


//

export const loose = integrate.loose satisfies ZuordModeX.Merge.Loose;

export const array = integrate.array satisfies ZuordModeX.Merge.Array;