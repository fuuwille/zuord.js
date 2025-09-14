import { zuordMode } from "./mode";
import { zuordX } from "../extended";
import { $zuord } from "../internal";
import { zuordCore } from "@zuord/core";
import type { Zuord, ZuordMode } from ".";
import type { ZuordPlain, ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : Zuord.Integrate<TSource, TPatch>;

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordMode.Integrate>> (source: TSource, patch: TPatch, mode: TMode)
    : Zuord.Integrate<TSource, TPatch, TMode>;

export function integrate <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordMode.Merge>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : Zuord.Integrate<TSource, TPatch> { return $zuord.integrate.plain(source, patch, zuordCore.modeResolve([zuordMode.integrate, mode])) as Zuord.Integrate<TSource, TPatch, TMode>; }

export function merge <TContents extends ZuordPlain.Array> (contents: [...TContents])
    : Zuord.Merge<TContents>;

export function merge <TContents extends ZuordPlain.Array, TMode extends Partial<ZuordMode.Merge>> (contents: [...TContents], mode: TMode)
    : Zuord.Merge<TContents, TMode>;

export function merge <TContents extends ZuordPlain.Array, TMode extends Partial<ZuordMode.Merge>> (contents: [...TContents], mode: TMode = {} as TMode)
    : Zuord.Merge<TContents, TMode> { return $zuord.merge.plain(contents, zuordCore.modeResolve([zuordMode.merge, mode])); }

export const evolve = zuordX.evolve.restrict;

export const pick = zuordX.pick.loose;

export const omit = zuordX.omit.loose;