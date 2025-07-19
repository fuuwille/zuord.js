import { InternalZuordCore } from "./internal";

export type Mode<K extends string = string, V extends unknown = boolean> = InternalZuordCore.Mode<K, V>;

export type ModeOf<TModes extends Mode[]> = InternalZuordCore.ModeOf<TModes> extends infer TOptions ? {
    [K in keyof TOptions]: [TOptions[K]] extends [never] ? never : TOptions[K];
} : never;

export type ModeFrom<TMode extends Mode, TOptions extends TMode> = InternalZuordCore.ModeFrom<TMode, TOptions>;


export type ShallowMode = Mode<"shallow">;

export type LibOptions = ShallowMode;

export type DefaultMode = {
    shallow: false;
};