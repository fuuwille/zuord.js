import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil as Util } from "@zuord/util";
import { ShapeZuord as Shape } from "./shape";
import { mode } from "./mode";

export namespace Integrate {
    export type Plain<TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.Plain<TBase, TInput>, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.Integrate.Plain<TBase, TInput, ZuordCore.ModeResolve<[typeof mode.integrate, TMode]>>;

    export type PlainLoose<TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.Integrate.Plain<TBase, TInput, ZuordCore.ModeResolve<[typeof mode.integrate, TMode]>>;

    export type PlainStrict<TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.PlainStrict<TBase, TInput>, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.Integrate.Plain<TBase, TInput, ZuordCore.ModeResolve<[typeof mode.integrate, TMode]>>;

    export type Array<TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode = {}> 
        = Internal.Integrate.Array<TBase, TInput, ZuordCore.ModeResolve<[typeof mode.integrate, TMode]>>;
}