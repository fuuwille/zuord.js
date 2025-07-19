import { InternalZuord } from "./index";
import { ZuordCore } from "@zuord/core";

export type Data = {
    content: object[];
    outcasts?: InternalZuord.OutcastConstructor[];
    mode?: Partial<ZuordCore.ModeConfig>;
};

export type DataOf<U extends object[], C extends InternalZuord.OutcastConstructor[], M extends Partial<ZuordCore.ModeConfig>> = {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};