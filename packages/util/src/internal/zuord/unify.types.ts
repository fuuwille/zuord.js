import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export declare namespace Unify {
    export type Resolve<T, TMode> = (
        [ZuordTrait.Eq<T, any>] extends [true] ? any :
        [ZuordTrait.Is<T, ZuordType.Primitive>] extends [true] ? T :
        [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? Unify.ResolvePlain<T, TMode> : never
    );

    export type ResolvePlain<T, TMode> = (
        | (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Unify.Resolve<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? Unify.ResolvePlainExtract<TExtracted, TMode> : never)
    );

    export type ResolvePlainExtract<T, TMode> = [ZuordTrait.Eq<T, any>] extends [false] ? (
        ResolvePlainComposite<T> extends infer TFilled ? ({
            [K in keyof TFilled]: (
                TMode extends { shallow: true } ? TFilled[K] : Unify.ResolvePlain<TFilled[K], TMode>
            )
        }) : never
    ) : any;

    export type ResolvePlainComposite<T> = {
        [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
    };
}