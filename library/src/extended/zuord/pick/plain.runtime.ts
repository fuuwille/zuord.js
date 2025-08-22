import { $zuord } from "../../../internal";
import { zuordModeX } from "../../mode";
import { zuordPlain } from "@zuord/type";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $ = ($obj: ZuordType.Plain, $content: ZuordUtil.Pattern.Plain<ZuordType.Plain>, $mode: Partial<ZuordModeX.Pick.Plain>) => {
    if(!zuordPlain.array($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.pick.plain($obj, $content, zuordCore.mode.resolve([zuordModeX.pick.plain, $mode]));
}


// LOOSE

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>> (base: TTarget, pattern: TPattern)
    : ZuordX.Pick.Plain.Loose<TTarget, TPattern>;

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordModeX.Pick.Plain>> (base: TTarget, pattern: TPattern, mode: TMode)
    : ZuordX.Pick.Plain.Loose<TTarget, TPattern, TMode>;

export function loose <TTarget extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern.Plain<TTarget>, TMode extends Partial<ZuordModeX.Pick.Plain>> (base: TTarget, pattern: TPattern, mode: TMode = {} as TMode)
    : ZuordX.Pick.Plain.Loose<TTarget, TPattern, TMode> { return $(base, pattern, mode); }