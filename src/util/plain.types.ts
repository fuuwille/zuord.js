import { ZuordUtil } from "@/util/alias.types";

type IsPlain<T> = ZuordUtil.IsObject<T> extends true ? (
  ZuordUtil.IsFunction<T> extends true ? false :
  ZuordUtil.IsArray<T> extends true ? false :
  true

) : false;

type HasPlain<T> = true extends (T extends any ? IsPlain<T> : false) ? true : false;

type HasNonPlain<T> = boolean extends (T extends any ? IsPlain<T> : false) ? false : true;

type AsPlain<T> = T extends any ? (IsPlain<T> extends true ? T : never) : never;

type AsNonPlain<T> = T extends any ? (IsPlain<T> extends true ? never : T) : never;
    
export type { IsPlain as ZuordIsPlain };
export type { HasPlain as ZuordHasPlain }
export type { HasNonPlain as ZuordHasNonPlain }
export type { AsPlain as ZuordAsPlain }
export type { AsNonPlain as ZuordAsNonPlain }