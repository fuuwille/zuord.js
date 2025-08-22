import { $zuord } from "../../../internal";
import { zuordModeX } from "../../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordModeX, ZuordX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $ = ($target: ZuordType.Plain, $pattern: ZuordUtil.Pattern.Plain<ZuordType.Plain>, $mode: Partial<ZuordModeX.Omit.Plain>) => {
    return $zuord.omit.plain($target, $pattern, zuordCore.mode.resolve([zuordModeX.omit.plain, $mode]));
}

// LOOSE

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>> (base: TTarget, pattern: TPattern)
    : ZuordX.Omit.Plain.Loose<TTarget, TPattern>;

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordModeX.Omit.Plain>> (base: TTarget, pattern: TPattern, mode: TMode)
    : ZuordX.Omit.Plain.Loose<TTarget, TPattern, TMode>;

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordModeX.Omit.Plain>> (base: TTarget, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordX.Omit.Plain.Loose<TTarget, TPattern, TMode> { return $(base, pattern, mode); }