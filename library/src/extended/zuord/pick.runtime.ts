import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $plain = ($target: ZuordType.Plain, $pattern: ZuordUtil.Pattern.Plain<ZuordType.Plain>, $mode: Partial<ZuordModeX.Pick.Plain>) => {
    return $zuord.pick.plain($target, $pattern, zuordCore.mode.resolve([zuordModeX.pick.plain, $mode]));
}


// LOOSE

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>> (base: TTarget, pattern: TPattern)
    : ZuordX.Pick.Loose<TTarget, TPattern>;

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordModeX.Pick.Plain>> (base: TTarget, pattern: TPattern, mode: TMode)
    : ZuordX.Pick.Loose<TTarget, TPattern, TMode>;

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordModeX.Pick.Plain>> (base: TTarget, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordX.Pick.Loose<TTarget, TPattern, TMode> { return $plain(base, pattern, mode); }