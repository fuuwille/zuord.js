export { type ZuordUtilIntegrate } from "./integrate";
export { type ZuordUtilNormalize } from "./normalize";
export { type ZuordUtilPartial } from "./partial";

import { type ZuordUtilIntegrate } from "./integrate";
import { type ZuordUtilNormalize } from "./normalize";
import { type ZuordUtilPartial } from "./partial";

export namespace ZuordUtil {
    export type Integrate<A, B> = ZuordUtilIntegrate<A, B>;
    export type Normalize<T> = ZuordUtilNormalize<T>;
    export type Partial<T> = ZuordUtilPartial<T>;
};