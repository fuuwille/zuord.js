import { ZuordIsExtends } from "./extends";

export type ZuordIsExists<T, H> = (() => ZuordIsExtends<T, H>) extends (() => infer R) ? (
    [R] extends [never] ? false : 
    [R] extends [true] ? true : false
) : false;