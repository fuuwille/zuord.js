import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export declare namespace Unify {
    export type ResolvePlain<T, TMode> = [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Unify.ResolvePlain<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? Unify.ResolvePlainExtract<TExtracted, TMode> : never)
    ) : T;

    export type ResolvePlainExtract<T, TMode> = [ZuordTrait.Eq<T, any>] extends [false] ? (
        ResolvePlainComposite<T> extends infer TFilled ? ({
            [K in keyof TFilled]: Unify.ResolvePlain<TFilled[K], TMode>;
        }) : never
    ) : any;

    export type ResolvePlainComposite<T> = {
        [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
    };
}