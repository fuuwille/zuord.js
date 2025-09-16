import { ZuordPlain, ZuordType } from "@zuord/type";
import { ProduceX } from "../extended";
import { ProduceMode } from "./produceMode";
import { ZuordUtil } from "@zuord/util";

export type Integrate<TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ProduceMode.Integrate> = {}>
    = ProduceX.Integrate.Restrict<TBase, TInput, TMode>;

export type Merge<TContent extends ZuordPlain.Array, TMode extends Partial<ProduceMode.Merge> = {}> 
    = ProduceX.Merge.Loose<TContent, TMode>;

export type Evolve<TBase extends ZuordType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ProduceMode.Evolve> = {}> 
    = ProduceX.Evolve.Restrict<TBase, TContent, TMode>;

export type Pick<TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ProduceMode.Pick> = {}>
    = ProduceX.Pick.Loose<TTarget, TPattern, TMode>;

export type Omit<TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ProduceMode.Omit> = {}> 
    = ProduceX.Omit.Loose<TTarget, TPattern, TMode>;