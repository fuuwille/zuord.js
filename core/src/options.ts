import { InternalZuordCore } from "./internal";
import { Mode, ShallowMode } from "./mode.types";

export type Options<TModes extends Mode[]> = InternalZuordCore.Options<TModes> extends infer TOptions ? {
    [K in keyof TOptions]: [TOptions[K]] extends [never] ? never : TOptions[K];
} : never;

export type LibOptions = ShallowMode;

export type DefaultMode = {
    shallow: false;
};

type Test = Options<[ShallowMode, { concat: true }]>;