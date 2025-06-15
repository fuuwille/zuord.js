import { ZuordIsExtends } from "./extends";

export type ZuordIsExists<T, E> = (() => ZuordIsExtends<T, E>) extends (() => infer R) ? (
    [R] extends [never] ? false : 
    [R] extends [true] ? true : false
) : false;