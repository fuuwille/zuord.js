import { $ZuordTrait } from "@zuord/trait/internal";
import { ZuordType } from "@zuord/type";

export declare namespace Eq {
    export type Both<T1 extends unknown, T2 extends unknown> = $ZuordTrait.Eq.Both<T1, T2>;

    export type Any<U1 extends ZuordType.Tuple, T2 extends unknown> = $ZuordTrait.Eq.Any<U1, T2>;
}