import { ZuordIsObject } from "./object";

//

type Normalize<T> = ZuordIsObject<T> extends true ? { [K in keyof T]: Normalize<T[K]> } : T;

//

export type { Normalize as ZuordNormalize };