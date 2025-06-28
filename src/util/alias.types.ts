import { Zuord } from "@/core/alias.types";
import type { ZuordAsAny } from "./any.types";
import type { ZuordIsUndefined, ZuordHasUndefined, ZuordAsNonUndefined } from "./undefined.types";
import type { ZuordIsTrue, ZuordIsSomeTrue, ZuordIsAllTrue, ZuordHasTrue, ZuordHasSomeTrue, ZuordHasAllTrue, ZuordExtractTrue, ZuordExcludeTrue } from "./true.types";
import type { ZuordIsBoolean, ZuordIsSomeBoolean, ZuordIsAllBoolean, ZuordHasBoolean, ZuordHasSomeBoolean, ZuordHasAllBoolean, ZuordExtractBoolean, ZuordExcludeBoolean } from "./boolean.types";
import type { ZuordHasOutcasts, ZuordExtractOutcasts, ZuordExcludeOutcasts } from "./outcasts.types";
import type { ZuordIsKey, ZuordIsRequiredKey, ZuordHasKey, ZuordAnyHasKey, ZuordAllHasKey, ZuordKeysOf, ZuordRequiredKeysOf, ZuordOptionalKeysOf } from "./key.types";
import type { ZuordValueAt } from "./value.types";
import type { ZuordIsNever, ZuordIsSomeNever, ZuordAsNonNever } from "./never.types";
import type { ZuordIsExtends } from "./extends.types";
import type { ZuordIsExists } from "./exists.types";
import type { ZuordIsFunction } from "./function.types";
import type { ZuordIsObject } from "./object.types";
import type { ZuordPlain, ZuordIsPlain, ZuordIsSomePlain, ZuordIsAllPlain, ZuordHasPlain, ZuordHasNonPlain, ZuordExtractPlain, ZuordExcludePlain, ZuordExtractPlainList } from "./plain.types";
import type { ZuordIsTuple, ZuordIsSomeTuple, ZuordIsAllTuple, ZuordHasTuple, ZuordHasSomeTuple, ZuordHasAllTuple, ZuordExtractTuple, ZuordExcludeTuple } from "./tuple.types";
import type { ZuordArrayIn, ZuordIsArray, ZuordIsSomeArray, ZuordIsAllArray, ZuordHasArray, ZuordHasSomeArray, ZuordHasAllArray, ZuordExtractArray, ZuordExcludeArray as ZuordExcludeArray } from "./array.types";
import type { ZuordArrayDepth } from "./array.types";
import type { ZuordOptional } from "./optional.types";
import type { ZuordUnionOf } from "./union.types";
import type { ZuordIsPattern } from "./pattern.types";
import type { ZuordMode } from "./mode.types";
import type { ZuordInstanceOf, ZuordInstanceTuple } from "./instance.types";

export namespace ZuordUtil {

  // NEVER

  export type IsNever<T> = ZuordIsNever<T>;

  export type IsSomeNever<U extends unknown[]> = ZuordIsSomeNever<U>;

  export type AsNonNever<U extends unknown[]> = ZuordAsNonNever<U>;


  // VOID

  // UNDEFINED

  export type IsUndefined<T> = ZuordIsUndefined<T>;
  
  export type HasUndefined<T> = ZuordHasUndefined<T>;
  
  export type AsNonUndefined<T> = ZuordAsNonUndefined<T>;


  // NULL

  // SYMBOL

  // TRUE

  export type IsTrue<T> = ZuordIsTrue<T>;

  export type IsSomeTrue<U extends readonly unknown[]> = ZuordIsSomeTrue<U>;

  export type IsAllTrue<U extends readonly unknown[]> = ZuordIsAllTrue<U>;

  export type HasTrue<T> = ZuordHasTrue<T>;

  export type HasSomeTrue<U extends readonly unknown[]> = ZuordHasSomeTrue<U>;

  export type HasAllTrue<U extends readonly unknown[]> = ZuordHasAllTrue<U>;

  export type ExtractTrue<T> = ZuordExtractTrue<T>;

  export type ExcludeTrue<T> = ZuordExcludeTrue<T>;


  // BOOLEAN

  export type IsBoolean<T> = ZuordIsBoolean<T>;

  export type IsSomeBoolean<U extends readonly unknown[]> = ZuordIsSomeBoolean<U>;

  export type IsAllBoolean<U extends readonly unknown[]> = ZuordIsAllBoolean<U>;

  export type HasBoolean<T> = ZuordHasBoolean<T>;

  export type HasSomeBoolean<U extends readonly unknown[]> = ZuordHasSomeBoolean<U>;

  export type HasAllBoolean<U extends readonly unknown[]> = ZuordHasAllBoolean<U>;

  export type ExtractBoolean<T> = ZuordExtractBoolean<T>;

  export type ExcludeBoolean<T> = ZuordExcludeBoolean<T>;


  // BIGINT

  // NUMBER

  // STRING

  // UNKNOWN


  // ANY

  export type AsAny<T> = ZuordAsAny<T>;


  // OBJECT 

  export type IsObject<T> = ZuordIsObject<T>;

  
  // PLAIN

  export type Plain<T> = ZuordPlain<T>;
  export type IsPlain<T> = ZuordIsPlain<T>;
  export type IsSomePlain<U extends readonly unknown[]> = ZuordIsSomePlain<U>;
  export type IsAllPlain<U extends readonly unknown[]> = ZuordIsAllPlain<U>;
  export type HasPlain<T> = ZuordHasPlain<T>;
  export type HasNonPlain<T> = ZuordHasNonPlain<T>;
  export type ExtractPlain<T> = ZuordExtractPlain<T>;
  export type ExcludePlain<T> = ZuordExcludePlain<T>;
  export type ExtractPlainList<T extends unknown[]> = ZuordExtractPlainList<T>;


  // FUNCTION

  export type IsFunction<T> = ZuordIsFunction<T>;


  // TUPLE

  export type IsTuple<T> = ZuordIsTuple<T>;

  export type IsSomeTuple<U extends readonly unknown[]> = ZuordIsSomeTuple<U>;

  export type IsAllTuple<U extends readonly unknown[]> = ZuordIsAllTuple<U>;

  export type HasTuple<T> = ZuordHasTuple<T>;

  export type HasSomeTuple<U extends readonly unknown[]> = ZuordHasSomeTuple<U>;

  export type HasAllTuple<U extends readonly unknown[]> = ZuordHasAllTuple<U>;

  export type ExtractTuple<T> = ZuordExtractTuple<T>;

  export type ExcludeTuple<T> = ZuordExcludeTuple<T>;
  
  
  // ARRAY

  export type ArrayIn<T> = ZuordArrayIn<T>;
  export type ArrayDepth<T> = ZuordArrayDepth<T>;
  export type IsArray<T> = ZuordIsArray<T>;
  export type IsSomeArray<U extends readonly unknown[]> = ZuordIsSomeArray<U>;
  export type IsAllArray<U extends readonly unknown[]> = ZuordIsAllArray<U>;
  export type HasArray<T> = ZuordHasArray<T>;
  export type HasSomeArray<T extends readonly unknown[]> = ZuordHasSomeArray<T>;
  export type HasAllArray<T extends readonly unknown[]> = ZuordHasAllArray<T>;
  export type ExtractArray<T> = ZuordExtractArray<T>;
  export type ExcludeArray<T> = ZuordExcludeArray<T>;


  // KEY

  export type IsKey<T, K> = ZuordIsKey<T, K>;
  export type IsRequiredKey<T, K extends PropertyKey> = ZuordIsRequiredKey<T, K>;
  export type HasKey<T, K> = ZuordHasKey<T, K>;
  export type AnyHasKey<U extends readonly unknown[], K> = ZuordAnyHasKey<U, K>;
  export type AllHasKey<U extends readonly unknown[], K> = ZuordAllHasKey<U, K>;
  export type KeysOf<U> = ZuordKeysOf<U>;
  export type RequiredKeysOf<T> = ZuordRequiredKeysOf<T>;
  export type OptionalKeysOf<T> = ZuordOptionalKeysOf<T>;


  // VALUE

  export type ValueAt<T, K extends PropertyKey> = ZuordValueAt<T, K>;


  // INSTANCE

  export type InstanceOf<T> = ZuordInstanceOf<T>;
  export type InstanceTuple<T> = ZuordInstanceTuple<T>;


  // UNORDEREDS

  export type HasOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordHasOutcasts<T, I>;
  export type ExtractOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordExtractOutcasts<T, I>;
  export type ExcludeOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordExcludeOutcasts<T, I>;
  export type IsExtends<T, U> = ZuordIsExtends<T, U>;
  export type IsExists<T, E> = ZuordIsExists<T, E>;
  export type Optional<T> = ZuordOptional<T>;
  export type UnionOf<M extends readonly any[]> = ZuordUnionOf<M>;
  export type IsPattern<P> = ZuordIsPattern<P>;
  export type Mode<M extends string> = ZuordMode<M>;
}