import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Plain<T> = IsPlain<T> extends true ? T : never;

type IsPlain<T> = ZuordUtil.IsObject<T> extends true ? (
  ZuordUtil.IsFunction<T> extends true ? false :
  ZuordUtil.IsArray<T> extends true ? false :
  true

) : false;

type IsSomePlain<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsPlain<First> extends true ? true : IsSomePlain<Rest>) : false;

type IsAllPlain<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsPlain<First> extends true ? IsAllPlain<Rest> : false) : true;

type HasPlain<T> = true extends (T extends any ? IsPlain<T> : false) ? true : false;

type HasNonPlain<T> = boolean extends (T extends any ? IsPlain<T> : false) ? false : true;

type ExtractPlain<T> = T extends any ? (IsPlain<T> extends true ? T : never) : never;

type ExcludePlain<T> = T extends any ? (IsPlain<T> extends true ? never : T) : never;
    
export type { Plain as ZuordPlain };
export type { IsPlain as ZuordIsPlain };
export type { IsSomePlain as ZuordIsSomePlain }
export type { IsAllPlain as ZuordIsAllPlain }
export type { HasPlain as ZuordHasPlain }
export type { HasNonPlain as ZuordHasNonPlain }
export type { ExtractPlain as ZuordExtractPlain }
export type { ExcludePlain as ZuordExcludePlain }