import { InternalZuord } from "./index";

export type Data = {
    content: object[];
    outcasts?: InternalZuord.OutcastConstructor[];
    mode?: Partial<InternalZuord.Mode>;
};

export type DataOf<U extends object[], C extends InternalZuord.OutcastConstructor[], M extends Partial<InternalZuord.Mode>> = {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};