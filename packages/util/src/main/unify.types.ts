import type { $ZuordUtil } from "../internal";
import type { FundType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export type Hybrid<T extends FundType.Plain | FundType.Array, TMode extends ZuordCore.ModeRecord = {}> 
    = $ZuordUtil.Unify.Hybrid<T, TMode>;

export type Plain<T extends FundType.Plain, TMode extends ZuordCore.ModeRecord = {}> 
    = $ZuordUtil.Unify.Plain<T, TMode>;

export type Tuple<T extends FundType.Tuple, TMode extends ZuordCore.ModeRecord = {}> 
    = $ZuordUtil.Unify.Tuple<T, TMode>;

export type Array<T extends FundType.Array, TMode extends ZuordCore.ModeRecord = {}> 
    = $ZuordUtil.Unify.Array<T, TMode>;