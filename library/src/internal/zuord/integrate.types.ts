import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { ZuordCore as Core } from "@zuord/core";


//

export declare namespace Integrate {
    export type Any<TBase, TOverlay, TMode extends Core.Mode.Field> = (
        [TBase, TOverlay] extends [infer A extends Type.Plain, infer B extends Type.Plain] ? Integrate.ResolvePlain<A, B, TMode> :
        [TBase, TOverlay] extends [infer A extends Type.Array, infer B extends Type.Array] ? Integrate.ResolveArray<A, B, TMode> : TOverlay
    );

    export type Plain<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode extends Core.Mode.Field> = (
        Integrate.ResolvePlain<TBase, TOverlay, TMode> extends infer TPlain extends Type.Plain ? (
            Util.Unify.Plain<TPlain, Core.Mode.Resolve<[TMode, { unifyArray: true }]>>
        ) : never
    );

    export type ResolvePlain<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode extends Core.Mode.Field> = (
        (Integrate.OverridePlain<TBase, TOverlay, TMode> & Integrate.AdditionPlain<TBase, TOverlay>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    );

    export type OverridePlain<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode extends Core.Mode.Field> = ({
        [K in keyof TBase]: K extends keyof TOverlay ? (
            TMode extends { shallow: true } ? (
                TOverlay[K]
            ) : Integrate.Any<TBase[K], TOverlay[K], TMode>
        ) : TBase[K];
    });

    export type AdditionPlain<TBase extends Type.Plain, TOverlay extends Type.Plain> = ({
        [K in keyof TOverlay as K extends keyof TBase ? never : K]: TOverlay[K];
    });

    export type Array<TBase extends Type.Array, TOverlay extends Type.Array, TMode extends Core.Mode.Field> = (
        Integrate.ResolveArray<TBase, TOverlay, { concat: true }> extends infer TArray extends Type.Array ? (
            [TBase, TOverlay] extends [Type.PureTuple, Type.PureTuple] ? (
                TArray
            ) : Util.Unify.Array<TArray, TMode>
        ) : never
    );

    export type ResolveArray<TBase extends Type.Array, TOverlay extends Type.Array, TMode extends Core.Mode.Field> = (
        TMode extends { concat: true } ? (
            [TBase, TOverlay] extends [infer A extends Type.PureTuple, infer B extends Type.PureTuple] ? (
                [...A, ...B]
            ) : TBase | TOverlay
        ) : TOverlay
    );
}