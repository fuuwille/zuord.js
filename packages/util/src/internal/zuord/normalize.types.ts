import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

type IsUnion<T, U = T> = T extends any
    ? [U] extends [T] ? false : true
    : false;

export declare namespace Normalize {
    export type Plain<T, TMode> = [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize.Plain<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? Normalize.PlainExtract<TExtracted, TMode> : never)
    ) : T;

    export type PlainExtract<T, TMode> = [IsUnion<T>] extends [true] ? ({
            [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
        } extends infer V extends ZuordType.Plain ? { [K in keyof V]: Normalize.Plain<V[K], TMode> }: never
    ) : T;
}

