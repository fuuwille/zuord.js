import { Zuord } from "./alias.types";

type Data = {
    content: object[];
    outcasts?: Zuord.OutcastConstructor[];
    mode?: Partial<Zuord.Mode>;
};

type DataOf<U extends object[], C extends Zuord.OutcastConstructor[], M extends Partial<Zuord.Mode>> = {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};

export type { Data as ZuordData };
export type { DataOf as ZuordDataOf };