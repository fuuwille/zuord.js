import { InternalZuordCore } from "./internal";

export type Mode<K extends string = string, V extends unknown = boolean> = InternalZuordCore.Mode<K, V>;

export type ModeOf<TOf extends Mode[]> = InternalZuordCore.ModeOf<TOf> extends infer TOptions ? {
    [K in keyof TOptions]: [TOptions[K]] extends [never] ? never : TOptions[K];
} : never;

export type ModeFrom<TFrom extends Mode, TMode extends TFrom> = InternalZuordCore.ModeFrom<TFrom, TMode>;


export type ShallowMode = Mode<"shallow">;

export type LibOptions = ShallowMode;

export type DefaultMode = {
    shallow: false;
};