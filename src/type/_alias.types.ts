import type { ZuordDummy, ZuordDummyOf } from "./dummy.types";
import type { ZuordAbsence } from "./absence.types";
import type { ZuordFunction } from "./function.types";
import type { ZuordTuple } from "./tuple.types";
import type { ZuordArray } from "./array.types";
import type { ZuordPlain, ZuordPlainOf } from "./plain.types";
import type { ZuordObject } from "./object.types";

export namespace ZuordType {

    export type Dummy = ZuordDummy;

    export type DummyOf<T extends ZuordType.Plain> = ZuordDummyOf<T>;

    export type Absence = ZuordAbsence;

    export type Function = ZuordFunction;

    export type Tuple = ZuordTuple;

    export type Array = ZuordArray;

    export type Plain = ZuordPlain;

    export type PlainOf<T> = ZuordPlainOf<T>;

    export type Object = ZuordObject;
}