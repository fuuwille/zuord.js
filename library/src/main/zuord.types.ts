import { ZuordArray, ZuordPlain, ZuordType } from "@zuord/type";
import { ZuordX } from "../extended";
import { ZuordMode } from "./mode";
import { ZuordUtil } from "@zuord/util";

export type Integrate<TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordMode.Integrate> = {}>
    = ZuordX.Integrate.Plain.Restrict<TBase, TInput, TMode>;

export type IntegrateArray<TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode extends Partial<ZuordMode.IntegrateArray> = {}>
    = ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>;

export type Merge<TContent extends ZuordPlain.Array, TMode extends Partial<ZuordMode.Merge> = {}> 
    = ZuordX.Merge.Plain.Loose<TContent, TMode>;

export type MergeArray<TContent extends ZuordArray.Nest, TMode extends Partial<ZuordMode.MergeArray> = {}> 
    = ZuordX.Merge.Array.Loose<TContent, TMode>;

export type Evolve<TBase extends ZuordType.Plain, TContent extends ZuordUtil.Restrict.KeysBatch<TBase, TContent>, TMode extends Partial<ZuordMode.Evolve> = {}> 
    = ZuordX.Evolve.Plain.Restrict<TBase, TContent, TMode>;

export type Pick<TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordMode.Pick> = {}>
    = ZuordX.Pick.Plain.Loose<TTarget, TPattern, TMode>;

export type Omit<TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordMode.Omit> = {}> 
    = ZuordX.Omit.Plain.Loose<TTarget, TPattern, TMode>;