import type { ProduceModeX } from ".";
import { $produceMode } from "../../internal";

export const loose = $produceMode.omit.plain satisfies ProduceModeX.Omit.Loose;