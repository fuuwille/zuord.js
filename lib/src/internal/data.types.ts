import { InternalZuord } from "./index";
import { ZuordCore } from "@zuord/core";

export type Data = {
    content: object[];
    outcasts?: InternalZuord.OutcastConstructor[];
    mode?: Partial<ZuordCore.Options>;
};

export type DataOf<U extends object[], C extends InternalZuord.OutcastConstructor[], M extends Partial<ZuordCore.Options>> = {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};