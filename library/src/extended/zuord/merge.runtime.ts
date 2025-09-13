import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType, ZuordPlain } from "@zuord/type";


// LOOSE

export function loose <TContent extends ZuordPlain.Array> (content: [...TContent])
    : ZuordX.Merge.Loose<TContent>;

export function loose <TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Loose>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Loose<TContent, TMode>;

export function loose <TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Loose>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Loose<TContent, TMode> { return $zuord.merge.plain(content, zuordCore.modeResolve([zuordModeX.merge.loose, mode])); }


// LOOSE

export function array <TContent extends ZuordType.Array<ZuordType.Array>> (content: [...TContent])
    : ZuordX.Merge.Array<TContent>;

export function array <TContent extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Array<TContent, TMode>;

export function array <TContent extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Array<TContent, TMode> { return $zuord.merge.array(content, zuordCore.modeResolve([zuordModeX.merge.array, mode])); }