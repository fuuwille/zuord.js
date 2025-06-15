import { ZuordIsExtends } from "./extends";

export type ZuordIsExists<T, H> = ZuordIsExtends<T, H> extends never ? false : true;