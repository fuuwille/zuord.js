import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export declare namespace Normalize {
    export type Plain<T, TMode> = [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize.Plain<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? Normalize.PlainExtract<TExtracted, TMode> : never)
    ) : T;

    export type PlainExtract<T, TMode> = (
        ZuordType.UnionToIntersection<T> extends infer V ? ({ 
            [K in keyof V]: Normalize.Plain<V[K], TMode>      
        }) : never
    );
}