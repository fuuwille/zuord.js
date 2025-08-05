import { $ZuordUtil } from ".";

export namespace One {
    export type Plain<T> = (
        (One.PlainRequired<T> & One.PlainOptional<T>) extends infer TOne ? {
            [K in keyof TOne]: TOne[K];
        } : never
    )

    export type PlainRequired<T> = {
        [K in $ZuordUtil.Keys.Required<T>]: T[K]
    };

    export type PlainOptional<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T[K]
    };
}