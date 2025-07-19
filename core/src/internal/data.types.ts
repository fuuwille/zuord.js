import { Zuord } from "./index";

export type Data = {
    content: object[];
    outcasts?: Zuord.OutcastConstructor[];
    mode?: Partial<Zuord.Mode>;
};

export type DataOf<U extends object[], C extends Zuord.OutcastConstructor[], M extends Partial<Zuord.Mode>> = {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};