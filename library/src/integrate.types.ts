import { InternalZuord as Internal } from "./internal";
import { defaultMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";

export type Object<TBase extends Shape.Integrate.Object, TInput extends Shape.Integrate.Object, TMode extends Shape.Integrate.Mode = {}> = Internal.Integrate<TBase, TInput, ZuordCore.ModeResolve<[typeof defaultMode, TMode]>>;

export type Plain<TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode = {}> = Internal.IntegratePlain<TBase, TInput, ZuordCore.ModeResolve<[typeof defaultMode, TMode]>>;

export type Mode = Internal.IntegrateMode;