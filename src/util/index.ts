export { type ZuordUtilIntegrate } from "./integrate";
export { type ZuordUtilNormalize } from "./normalize";
export { type ZuordUtilPartial } from "./partial";

import { type ZuordArrayDepth, type ZuordIsArray } from "./array";
import { type ZuordUtilIntegrate } from "./integrate";
import { type ZuordUtilNormalize } from "./normalize";
import { type ZuordUtilPartial } from "./partial";

export namespace ZuordUtil {
    // Array
    export type ArrayDepth<T> = ZuordArrayDepth<T>;
    export type IsArray<T> = ZuordIsArray<T>;

    // Integrate
    export type Integrate<A, B> = ZuordUtilIntegrate<A, B>;

    // Normalize
    export type Normalize<T> = ZuordUtilNormalize<T>;

    // Partial
    export type Partial<T> = ZuordUtilPartial<T>;
};