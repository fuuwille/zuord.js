import { PlainType, FundType } from "@zuord/type";
import { ProduceX } from "../extended";
import { ProduceMode } from "./produceMode";
import { ZuordUtil } from "@zuord/util";

export type Integrate<TBase extends FundType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ProduceMode.Integrate> = {}>
    = ProduceX.Integrate.Restrict<TBase, TInput, TMode>;

export type Merge<TContent extends PlainType.Array, TMode extends Partial<ProduceMode.Merge> = {}> 
    = ProduceX.Merge.Loose<TContent, TMode>;

export type Evolve<TBase extends FundType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ProduceMode.Evolve> = {}> 
    = ProduceX.Evolve.Restrict<TBase, TContent, TMode>;

export type Pick<TTarget extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ProduceMode.Pick> = {}>
    = ProduceX.Pick.Loose<TTarget, TPattern, TMode>;

export type Omit<TTarget extends FundType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ProduceMode.Omit> = {}> 
    = ProduceX.Omit.Loose<TTarget, TPattern, TMode>;