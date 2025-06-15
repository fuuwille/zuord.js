import { ZuordIsObject } from "./object";

//

type Normalize<T> = ZuordIsObject<T> extends true ? { [K in keyof T]: Normalize<T[K]> } : T;

//

export type ZuordNormalize<T> = T extends true ? true : Normalize<T>;