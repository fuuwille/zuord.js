import { PlainType, FundType } from "@zuord/type";
import { ProduceX } from "../extended";
import { ProduceMode } from "./produceMode";
import { TypeUtil } from "@zuord/util";

/**
 * Produces a new type with the given patch integrated into the source.
 * @zuordID integrate
 */
export type Integrate<TBase extends FundType.Plain, TInput extends TypeUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ProduceMode.Integrate> = {}>
    = ProduceX.Integrate.Restrict<TBase, TInput, TMode>;

/**
 * @zuordID merge
 */
export type Merge<TContent extends PlainType.Array, TMode extends Partial<ProduceMode.Merge> = {}> 
    = ProduceX.Merge.Loose<TContent, TMode>;

/**
 * @zuordID evolve
 */
export type Evolve<TBase extends FundType.Plain, TContent extends TypeUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ProduceMode.Evolve> = {}> 
    = ProduceX.Evolve.Restrict<TBase, TContent, TMode>;

/**
 * @zuordID pick
 */
export type Pick<TTarget extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TTarget>, TMode extends Partial<ProduceMode.Pick> = {}>
    = ProduceX.Pick.Loose<TTarget, TPattern, TMode>;

/**
 * @zuordID omit
 */
export type Omit<TTarget extends FundType.Plain, TPattern extends TypeUtil.Pattern.Plain<TTarget>, TMode extends Partial<ProduceMode.Omit> = {}> 
    = ProduceX.Omit.Loose<TTarget, TPattern, TMode>;