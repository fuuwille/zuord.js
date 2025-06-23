import { ZuordUtil } from "@/util/alias.types";

type IsObject<T> = [T] extends [object] ? true : false;

type IsPlainObject<T> = IsObject<T> extends true ? (
  ZuordUtil.IsFunction<T> extends true ? false :
  ZuordUtil.IsArray<T> extends true ? false :
  true

) : false;

type HasPlainObject<T> = true extends (T extends any ? IsPlainObject<T> : false) ? true : false;

type AsPlainObject<T> = T extends object
  ? T extends Function ? never 
  : T extends unknown[] ? never
  : T
  : never;

export type { IsObject as ZuordIsObject }
export type { IsPlainObject as ZuordIsPlainObject }
export type { HasPlainObject as ZuordHasPlainObject }
export type { AsPlainObject as ZuordAsPlainObject }