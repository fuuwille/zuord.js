import type { $TypeUtil } from "../internal";
import type { FundType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export type All<T extends FundType.Plain, TMode extends ZuordCore.ModeRecord> = $TypeUtil.One.ResolveAll<T, TMode>;

export type Required<T extends FundType.Plain, TMode extends ZuordCore.ModeRecord> = $TypeUtil.One.ResolveRequired<T, TMode>;

export type Optional<T extends FundType.Plain, TMode extends ZuordCore.ModeRecord> = $TypeUtil.One.ResolveOptional<T, TMode>;