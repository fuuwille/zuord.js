import type { ZuordAbsence } from "./absence.types";
import type { ZuordFunction } from "./function.types";
import type { ZuordTuple } from "./tuple.types";
import type { ZuordArray, ZuordEmptyArray, ZuordArrayInfer, ZuordArrayDepth } from "./array.types";
import type { ZuordPlain } from "./plain.types";
import type { ZuordObject } from "./object.types";

export namespace ZuordType {
    
    export type Absence = ZuordAbsence;

    export type Function = ZuordFunction;

    export type Tuple = ZuordTuple;

    export type Array = ZuordArray;

    export type EmptyArray = ZuordEmptyArray;

    export type ArrayInfer<T> = ZuordArrayInfer<T>;

    export type ArrayDepth<T> = ZuordArrayDepth<T>;

    export type Plain = ZuordPlain;

    export type Object = ZuordObject;
}