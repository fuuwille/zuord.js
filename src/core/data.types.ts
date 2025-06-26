import { Zuord } from "@/core/alias.types";

type Data = {
    content: object[];
    outcasts?: Zuord.OutcastConstructors;
    mode?: Zuord.Mode;
};

type DataOf<U extends object[], C extends Zuord.OutcastConstructors, M extends Zuord.Mode> = Data & {
    content: [...U];
    outcasts?: [...C];
    mode?: M;
};

export type { Data as ZuordData };
export type { DataOf as ZuordDataOf };