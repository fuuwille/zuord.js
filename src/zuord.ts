export { zuordMerge, type ZuordMerge, type ZuordMergeRaw } from "./zuordMerge";
export { zuordPick, type ZuordPick, type ZuordPickRaw, type ZuordPickOf } from "./zuordPick";
export { zuordOmit, type ZuordOmit, type ZuordOmitRaw, type ZuordOmitOf } from "./zuordOmit";
export { zuordPattern, type ZuordPattern, type IsZuorPattern } from "./zuordPattern";

import { zuordMerge, type ZuordMerge, type ZuordMergeRaw } from "./zuordMerge";
import { zuordPick, type ZuordPick, type ZuordPickRaw, type ZuordPickOf } from "./zuordPick";
import { zuordOmit, type ZuordOmit, type ZuordOmitRaw, type ZuordOmitOf } from "./zuordOmit";
import { zuordPattern, type ZuordPattern } from "./zuordPattern";

export namespace Zuord {
  export type Merge<U extends object[], O extends string = ""> = ZuordMerge<U, O>;
  export type MergeRaw<O extends string, U extends object[]> = ZuordMergeRaw<U, O>;
  export type Pick<T, U> = ZuordPick<T, U>;
  export type PickRaw<T, U> = ZuordPickRaw<T, U>;
  export type PickOf<T, U> = ZuordPickOf<T, U>;
  export type Omit<T, U> = ZuordOmit<T, U>;
  export type OmitRaw<T, U> = ZuordOmitRaw<T, U>;
  export type OmitOf<T, U> = ZuordOmitOf<T, U>;
  export type Pattern<T> = ZuordPattern<T>;
};

export const zuord = {
  merge: zuordMerge,
  pick: zuordPick,
  omit: zuordOmit,
  pattern: zuordPattern,
} as const;