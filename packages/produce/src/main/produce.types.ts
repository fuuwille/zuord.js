import { ZuordPlain, ZuordType } from "@zuord/type";
import { ZuordX } from "../extended";
import { ZuordProduceMode } from "./produceMode";
import { ZuordUtil } from "@zuord/util";

export type Integrate<TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordProduceMode.Integrate> = {}>
    = ZuordX.Integrate.Restrict<TBase, TInput, TMode>;

export type Merge<TContent extends ZuordPlain.Array, TMode extends Partial<ZuordProduceMode.Merge> = {}> 
    = ZuordX.Merge.Loose<TContent, TMode>;

export type Evolve<TBase extends ZuordType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordProduceMode.Evolve> = {}> 
    = ZuordX.Evolve.Restrict<TBase, TContent, TMode>;

export type Pick<TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordProduceMode.Pick> = {}>
    = ZuordX.Pick.Loose<TTarget, TPattern, TMode>;

export type Omit<TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordProduceMode.Omit> = {}> 
    = ZuordX.Omit.Loose<TTarget, TPattern, TMode>;