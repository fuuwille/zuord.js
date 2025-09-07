import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordType, zuordPlain } from "@zuord/type";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType, ZuordPlain } from "@zuord/type";

const $plain = ($content: ZuordPlain.Array, $mode: Partial<ZuordModeX.Merge.Plain>) => {
    if(!zuordPlain.array($content)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.merge.plain($content, core.mode.resolve([zuordModeX.merge.plain, $mode]));
}

    
const $array = ($content: ZuordType.Array<ZuordType.Array>, $mode: Partial<ZuordModeX.Merge.Array>) => {
    if(!zuordType.array($content, { item: zuordType.array })) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    return $zuord.merge.array($content, core.mode.resolve([zuordModeX.merge.array, $mode]));
}


// LOOSE

export function loose <TContent extends ZuordPlain.Array> (content: [...TContent])
    : ZuordX.Merge.Loose<TContent>;

export function loose <TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Loose<TContent, TMode>;

export function loose <TContent extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Plain>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Loose<TContent, TMode> { return $plain(content, mode); }


// LOOSE

export function array <TContent extends ZuordType.Array<ZuordType.Array>> (content: [...TContent])
    : ZuordX.Merge.Array<TContent>;

export function array <TContent extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (content: [...TContent], mode: TMode)
    : ZuordX.Merge.Array<TContent, TMode>;

export function array <TContent extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (content: [...TContent], mode: TMode = {} as TMode)
    : ZuordX.Merge.Array<TContent, TMode> { return $array(content, mode); }