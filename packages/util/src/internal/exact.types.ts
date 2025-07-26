export type Exact<Base, Input> ={
    [K in keyof Input]: K extends keyof Base
    ? Exact<Base[K], Input[K]>
    : never;
} & {
    [K in Exclude<keyof Base, keyof Input>]?: never;
}