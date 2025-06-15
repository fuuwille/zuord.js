import { ZuordIsExtends } from "./extends";

//

type IsExists<T, E> = (() => ZuordIsExtends<T, E>) extends (() => infer R) ? (
    [R] extends [never] ? false : 
    [R] extends [true] ? true : false
) : false;

//

export type ZuordIsExists<T, E> = IsExists<T, E>