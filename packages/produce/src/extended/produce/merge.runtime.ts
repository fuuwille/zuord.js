import { $produce } from "../../internal";
import { produceModeX } from "../produceMode";
import { zuordCore } from "@zuord/core";
import type { ProduceX, ProduceModeX } from "../..";
import type { ZuordType, ZuordPlain } from "@zuord/type";


// LOOSE

export function loose <TContents extends ZuordPlain.Array> (contents: [...TContents])
    : ProduceX.Merge.Loose<TContents>;

export function loose <TContents extends ZuordPlain.Array, TMode extends Partial<ProduceModeX.Merge.Loose>> (contents: [...TContents], mode: TMode)
    : ProduceX.Merge.Loose<TContents, TMode>;

export function loose <TContents extends ZuordPlain.Array, TMode extends Partial<ProduceModeX.Merge.Loose>> (contents: [...TContents], mode: TMode = {} as TMode)
    : ProduceX.Merge.Loose<TContents, TMode> { return $produce.merge.plain(contents, zuordCore.modeResolve([produceModeX.merge.loose, mode])); }


// LOOSE

export function array <TContents extends ZuordType.Array<ZuordType.Array>> (contents: [...TContents])
    : ProduceX.Merge.Array<TContents>;

export function array <TContents extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ProduceModeX.Merge.Array>> (contents: [...TContents], mode: TMode)
    : ProduceX.Merge.Array<TContents, TMode>;

export function array <TContents extends ZuordType.Array<ZuordType.Array>, TMode extends Partial<ProduceModeX.Merge.Array>> (contents: [...TContents], mode: TMode = {} as TMode)
    : ProduceX.Merge.Array<TContents, TMode> { return $produce.merge.array(contents, zuordCore.modeResolve([produceModeX.merge.array, mode])); }