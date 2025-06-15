type ModeOf<M extends string> = M extends `${infer A}|${infer B}` ? A | ModeOf<B> : M;

//

export type { ModeOf as ZuordModeOf };