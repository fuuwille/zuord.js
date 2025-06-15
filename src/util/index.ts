export { type ZuordUtilIntegrate } from "./integrate";
export { type ZuordNormalize as ZuordUtilNormalize } from "./normalize";
export { type ZuordUtilPartial } from "./partial";

import { type ZuordArrayDepth, type ZuordIsArray } from "./array";
import { type ZuordUtilIntegrate } from "./integrate";
import { type ZuordNormalize } from "./normalize";
import { type ZuordUtilPartial } from "./partial";

export namespace ZuordUtil {
    // Array
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
    export type IsArray<T> = ZuordIsArray<T>;

    // Integrate
    export type Integrate<A, B> = ZuordUtilIntegrate<A, B>;

    // Normalize
    export type Normalize<T> = ZuordNormalize<T>;

    // Partial
    export type Partial<T> = ZuordUtilPartial<T>;
};