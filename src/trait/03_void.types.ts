import { ZuordTrait } from "@/trait/_alias.types";

type IsVoid<T> = ZuordTrait.Is<T, void>;

export type { IsVoid as ZuordIsVoid };