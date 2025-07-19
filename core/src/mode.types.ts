import { InternalZuordCore } from "./internal";

export type Mode<K extends string = string, V extends unknown = boolean> = InternalZuordCore.Mode<K, V>;

export type ModeOf<TOf extends Mode[]> = InternalZuordCore.ModeOf<TOf> extends infer TOptions ? {
    [K in keyof TOptions]: [TOptions[K]] extends [never] ? never : TOptions[K];
} : never;

export type ModeFrom<TFrom extends Mode, TMode extends Partial<TFrom>, TCurrent extends Omit<TFrom, keyof TMode> = TFrom> = InternalZuordCore.ModeFrom<TFrom, TMode, TCurrent>  extends infer TMode ? {
    [K in keyof TMode]: [TMode[K]] extends [never] ? never : TMode[K];
} : never;

// Define specific modes

export type BaseMode = ModeOf<[ShallowMode]>;

export type DefaultMode = ModeFrom<BaseMode, {
    shallow: false;
}>;

export type ShallowMode = Mode<"shallow">;

export type ConcatMode = Mode<"concat">;