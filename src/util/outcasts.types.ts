import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type HasOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = true extends (T extends (ZuordUtil.UnionOf<I> extends infer T ? T | readonly T[] : never) ? true : false) ? true : false;

type AsOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = T extends any ? (HasOutcasts<T, I> extends true ? T : never) : never;

type AsNonOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = T extends any ? (HasOutcasts<T, I> extends true ? never : T) : never;

export type { HasOutcasts as ZuordHasOutcasts };
export type { AsOutcasts as ZuordAsOutcasts };
export type { AsNonOutcasts as ZuordAsNonOutcasts };