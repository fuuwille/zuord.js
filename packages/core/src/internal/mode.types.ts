export type ModeField<K extends string = string, V extends boolean = boolean> = Record<K, V>;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast] ? (
  ModeResolve<TRest> extends infer TResolvedRest ? {
    [K in keyof TResolvedRest | keyof TLast]: (
      K extends keyof TLast ? (
        TLast[K]
      ) : 
      K extends keyof TResolvedRest ? (
        TResolvedRest[K]
      ) : false
    )
  } : never
) : {};

export type ModeOn<TMode, TKey> = TKey extends keyof TMode ? (
  [TMode[TKey]] extends [true] ? true : false
) : false;

export type ModeOff<TMode, TKey> = TKey extends keyof TMode ? (
  [TMode[TKey]] extends [true] ? false : true
) : true;

export type ShallowMode = ModeField<"shallow">;

export type ConcatMode = ModeField<"concat">;

export type BaseMode = ModeResolve<[ShallowMode]>;