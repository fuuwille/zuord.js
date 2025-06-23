import { ZuordUtil } from "@/util/alias.types";

export type PlainObject<T> = T extends object
  ? T extends Function ? never 
  : T extends unknown[] ? never
  : T
  : never;

type IsObject<T> = [T] extends [object] ? true : false;

type IsPlainObject<T> = IsObject<T> extends true ? (
  ZuordUtil.IsFunction<T> extends true ? false :
  ZuordUtil.IsArray<T> extends true ? false :
  true
) : false;

export type { PlainObject as ZuordPlainObject }
export type { IsObject as ZuordIsObject }
export type { IsPlainObject as ZuordIsPlainObject }