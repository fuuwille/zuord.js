import { integrate } from "./integrate";
import type { ProduceModeX } from ".";

export const loose = integrate.loose satisfies ProduceModeX.Merge.Loose;

export const array = integrate.array satisfies ProduceModeX.Merge.Array;