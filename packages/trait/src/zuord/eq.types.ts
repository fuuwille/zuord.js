import { $ZuordTrait } from "@zuord/trait/internal";
import { ZuordType } from "@zuord/type";

export declare namespace Eq {
    export type Both<T1 extends unknown, T2 extends unknown> = $ZuordTrait.Eq.Both<T1, T2>;

    export type Any<U1 extends ZuordType.Tuple, T2 extends unknown> = $ZuordTrait.Eq.Any<U1, T2>;

    export type Every<U1 extends ZuordType.Tuple, T2 extends unknown> = $ZuordTrait.Eq.Every<U1, T2>;

    export type Some<T1 extends unknown, U2 extends ZuordType.Tuple> = $ZuordTrait.Eq.Some<T1, U2>;

    export type AnySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = $ZuordTrait.Eq.AnySome<U1, U2>;

    export type EverySome<U1 extends ZuordType.Tuple, U2 extends ZuordType.Tuple> = $ZuordTrait.Eq.EverySome<U1, U2>;
}