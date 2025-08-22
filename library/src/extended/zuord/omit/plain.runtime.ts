import { $zuord } from "../../../internal";
import { zuordModeX } from "../../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $ = ($target: ZuordType.Plain, $pattern: ZuordUtil.Pattern.Plain<ZuordType.Plain>, $mode: Partial<ZuordModeX.Omit.Plain>) => {
    return $zuord.omit.plain($target, $pattern, zuordCore.mode.resolve([zuordModeX.omit.plain, $mode]));
}