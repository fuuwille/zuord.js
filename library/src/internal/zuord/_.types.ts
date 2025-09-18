export type ModeRecord<K = string, V = boolean> = K extends string ? {
    [P in K]: V
} : never;

export type ModeResolve<TModes> = TModes extends [...infer TRest, infer TLast] ? (
    ModeResolve<TRest> extends infer TResolved ? {
        [K in keyof TResolved | keyof TLast]: (
            K extends keyof TLast ? TLast[K] :
            K extends keyof TResolved ? TResolved[K] : never
        ) extends infer TValue extends boolean ? TValue : false
    } : never
) : {};