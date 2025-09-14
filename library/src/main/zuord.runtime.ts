import { zuordMode } from "./mode";
import { zuordX } from "../extended";
import { $zuord } from "../internal";
import { zuordCore } from "@zuord/core";
import type { Zuord, ZuordMode } from ".";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : Zuord.Integrate<TSource, TPatch>;

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordMode.Integrate>> (source: TSource, patch: TPatch, mode: TMode)
    : Zuord.Integrate<TSource, TPatch, TMode>;

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordMode.Merge>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : Zuord.Integrate<TSource, TPatch> { return $zuord.integrate.plain(source, patch, zuordCore.modeResolve([zuordMode.integrate, mode])) as Zuord.Integrate<TSource, TPatch, TMode>; }

export const merge = zuordX.merge.loose;

export const evolve = zuordX.evolve.restrict;

export const pick = zuordX.pick.loose;

export const omit = zuordX.omit.loose;