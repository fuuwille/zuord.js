export type Flags<K = string, V = boolean> = K extends string ? {
    [P in K]: V
} : never;

export type Resolve<TModes> = TModes extends [...infer TRest, infer TLast] ? (
    Resolve<TRest> extends infer TResolved ? {
        [K in keyof TResolved | keyof TLast]: (
            K extends keyof TLast ? TLast[K] :
            K extends keyof TResolved ? TResolved[K] : never
        ) extends infer TValue extends boolean ? TValue : false
    } : never
) : {};