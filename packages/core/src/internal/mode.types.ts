export type ModeField<K = string, V = boolean> = K extends string ? {
  [P in K]: V
} : never;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast] ? (
  ModeResolve<TRest> extends infer TResolvedRest ? {
    [K in keyof TResolvedRest | keyof TLast]: (
      K extends keyof TLast ? TLast[K] :
      K extends keyof TResolvedRest ? TResolvedRest[K] : never
    ) extends infer TResolved extends boolean ? TResolved : false
  } : never
) : {};