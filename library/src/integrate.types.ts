import { InternalZuord as Internal } from "./internal";
import { integrate } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil as Util } from "@zuord/util";
import { ShapeZuord as Shape } from "./shape";

export namespace Integrate {
    export type Object<TBase extends Shape.Integrate.Object, TInput extends Shape.Integrate.Object, TMode extends Shape.Integrate.Mode = {}>
        = Internal.Integrate<TBase, TInput, ZuordCore.ModeResolve<[typeof integrate.defaultMode, TMode]>>;

    export type Plain<TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.Plain<TBase, TInput>, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.IntegratePlain<TBase, TInput, ZuordCore.ModeResolve<[typeof integrate.defaultMode, TMode]>>;

    export type PlainLoose<TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.IntegratePlain<TBase, TInput, ZuordCore.ModeResolve<[typeof integrate.defaultMode, TMode]>>;

    export type PlainStrict<TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.PlainStrict<TBase, TInput>, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.IntegratePlain<TBase, TInput, ZuordCore.ModeResolve<[typeof integrate.defaultMode, TMode]>>;

    export type Array<TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.IntegrateArray<TBase, TInput, ZuordCore.ModeResolve<[typeof integrate.defaultMode, TMode]>>;

    export type Mode = Internal.IntegrateMode;
}