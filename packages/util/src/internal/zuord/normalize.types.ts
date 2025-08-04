import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export declare namespace Normalize {
    export type Plain<T, TMode> = [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize.Plain<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? Normalize.PlainExtract<TExtracted, TMode> : never)
    ) : T;

    export type PlainExtract<T, TMode> = (
        PlainFill<T> extends infer TFilled ? ({
            [K in keyof TFilled]: Normalize.Plain<TFilled[K], TMode>;
        }) : never
    );

    export type PlainFill<T> = {
        [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
    };
}