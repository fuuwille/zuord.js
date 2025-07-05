import { ZuordIsKey, ZuordIsRequiredKey, ZuordHasKey, ZuordAnyHasKey, ZuordAllHasKey, ZuordKeysOf, ZuordRequiredKeysOf, ZuordOptionalKeysOf } from "./key.types";
import { ZuordValueAt } from "./value.types";
import { ZuordUnionOf } from "./union.types";
import { ZuordInstanceOf, ZuordInstanceTuple } from "./instance.types";

export namespace ZuordUtil {

    // KEY

    export type IsKey<T, K> = ZuordIsKey<T, K>;

    export type IsRequiredKey<T, K extends PropertyKey> = ZuordIsRequiredKey<T, K>;
    
    export type HasKey<T, K> = ZuordHasKey<T, K>;

    export type AnyHasKey<U extends readonly unknown[], K> = ZuordAnyHasKey<U, K>;

    export type AllHasKey<U extends readonly unknown[], K> = ZuordAllHasKey<U, K>;

    export type KeysOf<U> = ZuordKeysOf<U>;

    export type RequiredKeysOf<T> = ZuordRequiredKeysOf<T>;

    export type OptionalKeysOf<T> = ZuordOptionalKeysOf<T>;

    
    // VALUE

    export type ValueAt<T, K extends PropertyKey> = ZuordValueAt<T, K>;

    // UNION

    export type UnionOf<M extends readonly any[]> = ZuordUnionOf<M>;


    // INSTANCE

    export type InstanceOf<T> = ZuordInstanceOf<T>;
    
    export type InstanceTuple<T> = ZuordInstanceTuple<T>;
}