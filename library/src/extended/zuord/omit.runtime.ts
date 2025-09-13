import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import type { ZuordModeX, ZuordX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : ZuordX.Omit.Loose<TSource, TPattern>;

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordModeX.Omit.Loose>> (source: TSource, pattern: TPattern, mode: TMode)
    : ZuordX.Omit.Loose<TSource, TPattern, TMode>;

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ZuordModeX.Omit.Loose>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordX.Omit.Loose<TSource, TPattern, TMode> { return $zuord.omit.plain(source, pattern, [zuordModeX.omit.loose, mode]); }