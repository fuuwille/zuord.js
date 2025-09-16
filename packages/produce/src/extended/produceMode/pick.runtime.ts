import { $produceMode } from "../../internal";
import type { ProduceModeX } from ".";

export const loose = $produceMode.pick.plain satisfies ProduceModeX.Pick.Loose;