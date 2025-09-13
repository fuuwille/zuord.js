import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : ZuordX.Pick.Loose<TSource, TPattern>;

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordModeX.Pick.Loose>> (source: TSource, pattern: TPattern, mode: TMode)
    : ZuordX.Pick.Loose<TSource, TPattern, TMode>;

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordModeX.Pick.Loose>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordX.Pick.Loose<TSource, TPattern, TMode> { return $zuord.pick.plain(source, pattern, zuordCore.modeResolve([zuordModeX.pick.loose, mode])); }