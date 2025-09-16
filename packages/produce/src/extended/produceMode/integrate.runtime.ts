import { $produceMode } from "../../internal";
import type { ProduceModeX } from ".";

export const loose = $produceMode.integrate.plain satisfies ProduceModeX.Integrate.Loose;

export const restrict = $produceMode.integrate.plain satisfies ProduceModeX.Integrate.Restrict;

export const array = $produceMode.integrate.array satisfies ProduceModeX.Integrate.Array;