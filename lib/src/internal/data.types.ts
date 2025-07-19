import { InternalZuord } from "./index";
import { ZuordCore } from "@zuord/core";

export type Data = {
    content: object[];
    outcasts?: InternalZuord.OutcastConstructor[];
    mode?: Partial<ZuordCore.Mode>;
};

export type DataOf<U extends object[], C extends InternalZuord.OutcastConstructor[], M extends Partial<ZuordCore.Mode>> = {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};