import { $produce } from "../../internal";
import { produceModeX } from "../produceMode";
import { zuordCore } from "@zuord/core";
import type { ProduceX, ProduceModeX } from "../..";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>> (source: TSource, pattern: TPattern)
    : ProduceX.Omit.Loose<TSource, TPattern>;

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceModeX.Omit.Loose>> (source: TSource, pattern: TPattern, mode: TMode)
    : ProduceX.Omit.Loose<TSource, TPattern, TMode>;

export function loose <TSource extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TSource>, TMode extends Partial<ProduceModeX.Omit.Loose>> (source: TSource, pattern: TPattern, mode: TMode = {} as TMode)
    : ProduceX.Omit.Loose<TSource, TPattern, TMode> { return $produce.omit.plain(source, pattern, zuordCore.modeResolve([produceModeX.omit.loose, mode])); }