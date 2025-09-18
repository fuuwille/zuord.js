import type { $TypeUtil } from "../internal";
import type { FundType } from "@zuord/type";
import type { Zuord } from "zuord";

export type All<T extends FundType.Plain, TMode extends Zuord.ModeRecord> = $TypeUtil.One.ResolveAll<T, TMode>;

export type Required<T extends FundType.Plain, TMode extends Zuord.ModeRecord> = $TypeUtil.One.ResolveRequired<T, TMode>;

export type Optional<T extends FundType.Plain, TMode extends Zuord.ModeRecord> = $TypeUtil.One.ResolveOptional<T, TMode>;