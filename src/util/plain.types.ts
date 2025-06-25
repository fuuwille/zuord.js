import { ZuordUtil } from "@/util/alias.types";

type Plain<T> = IsPlain<T> extends true ? T : never;

type IsPlain<T> = ZuordUtil.IsObject<T> extends true ? (
  ZuordUtil.IsFunction<T> extends true ? false :
  ZuordUtil.IsArray<T> extends true ? false :
  true

) : false;

type HasPlain<T> = true extends (T extends any ? IsPlain<T> : false) ? true : false;

type HasNonPlain<T> = boolean extends (T extends any ? IsPlain<T> : false) ? false : true;

type SomeIsPlain<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsPlain<First> extends true ? true : SomeIsPlain<Rest>) : false;

type AllIsPlain<U extends readonly unknown[]> = U extends [infer First, ...infer Rest]
    ? (IsPlain<First> extends true ? AllIsPlain<Rest> : false) : true;

type AsPlain<T> = T extends any ? (IsPlain<T> extends true ? T : never) : never;

type AsNonPlain<T> = T extends any ? (IsPlain<T> extends true ? never : T) : never;

type AsOnePlain<T>  = ZuordUtil.AsPlain<T> extends infer T ? (
  { [K in ZuordUtil.RequiredKeysOf<T>]-?: ZuordUtil.ValueAt<T, K> } &
  { [K in ZuordUtil.OptionalKeysOf<T>]?: ZuordUtil.ValueAt<T, K> }
) : never; // ZuordUtil.AsNonUndefined<ZuordUtil.ValueAt<T, K>>
    
export type { Plain as ZuordPlain };
export type { IsPlain as ZuordIsPlain };
export type { HasPlain as ZuordHasPlain }
export type { HasNonPlain as ZuordHasNonPlain }
export type { SomeIsPlain as ZuordSomeIsPlain }
export type { AllIsPlain as ZuordAllIsPlain }
export type { AsPlain as ZuordAsPlain }
export type { AsNonPlain as ZuordAsNonPlain }
export type { AsOnePlain as ZuordAsOnePlain };