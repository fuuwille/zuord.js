import type { $TypeUtil } from "../internal";
import type { FundType } from "@zuord/type";
import type { Zuord } from "zuord";

export type Hybrid<T extends FundType.Plain | FundType.Array, TMode extends Zuord.ModeRecord = {}> 
    = $TypeUtil.Unify.Hybrid<T, TMode>;

export type Plain<T extends FundType.Plain, TMode extends Zuord.ModeRecord = {}> 
    = $TypeUtil.Unify.Plain<T, TMode>;

export type Tuple<T extends FundType.Tuple, TMode extends Zuord.ModeRecord = {}> 
    = $TypeUtil.Unify.Tuple<T, TMode>;

export type Array<T extends FundType.Array, TMode extends Zuord.ModeRecord = {}> 
    = $TypeUtil.Unify.Array<T, TMode>;