import type { $TypeUtil } from "../internal";
import type { FundType } from "@zuord/type";
import type { Zuord } from "zuord";

export type Required<T extends FundType.Plain, TMode extends Zuord.ModeRecord> = $TypeUtil.Only.ResolveRequired<T, TMode>;