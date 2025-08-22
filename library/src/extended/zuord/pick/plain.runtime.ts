import { $zuord } from "../../../internal";
import { zuordModeX } from "../../mode";
import { zuordPlain } from "@zuord/type";
import { zuordCore } from "@zuord/core";
import type { ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

const $ = ($obj: ZuordType.Plain, $content: ZuordUtil.Pattern.Plain<ZuordType.Plain>, $mode: Partial<ZuordModeX.Pick.Plain>) => {
    if(!zuordPlain.array($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.pick.plain($obj, $content, zuordCore.mode.resolve([zuordModeX.pick.plain, $mode]));
}