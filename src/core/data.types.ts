import { Zuord } from "@/core/alias.types";

type Data = {
    content: object[];
    outcasts?: Zuord.OutcastConstructors;
    mode?: Zuord.Mode;
};

export type { Data as ZuordData };