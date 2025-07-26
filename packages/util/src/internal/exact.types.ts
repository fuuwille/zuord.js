import { ZuordType } from "@zuord/type";

export type Exact<Base, Input> =
  Base extends ZuordType.Plain ?(
        {
            [K in Exclude<keyof Input, Exclude<keyof Input, keyof Base>>]: (
                [Input[K]] extends [true] ? true : Exact<Base[K], Input[K]>
            )
        } & {
            [K in Exclude<keyof Input, keyof Base>]: never;
        }) extends infer TExact ? { [K in keyof TExact]: TExact[K] } : never
    : never;
