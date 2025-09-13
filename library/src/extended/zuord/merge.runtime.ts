import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType, ZuordPlain } from "@zuord/type";


// LOOSE

export function loose <TContents extends ZuordPlain.Array> (contents: [...TContents])
    : ZuordX.Merge.Loose<TContents>;

export function loose <TContents extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Loose>> (contents: [...TContents], mode: TMode)
    : ZuordX.Merge.Loose<TContents, TMode>;

export function loose <TContents extends ZuordPlain.Array, TMode extends Partial<ZuordModeX.Merge.Loose>> (contents: [...TContents], mode: TMode = {} as TMode)
    : ZuordX.Merge.Loose<TContents, TMode> { return $zuord.merge.plain(contents, zuordCore.modeResolve([zuordModeX.merge.loose, mode])); }


// LOOSE

export function array <TContents extends ZuordType.Array<ZuordType.Array>> (contents: [...TContents])
    : ZuordX.Merge.Array<TContents>;

export function array <TContents extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (contents: [...TContents], mode: TMode)
    : ZuordX.Merge.Array<TContents, TMode>;

export function array <TContents extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ZuordModeX.Merge.Array>> (contents: [...TContents], mode: TMode = {} as TMode)
    : ZuordX.Merge.Array<TContents, TMode> { return $zuord.merge.array(contents, zuordCore.modeResolve([zuordModeX.merge.array, mode])); }