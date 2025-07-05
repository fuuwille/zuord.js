import { Zuord } from "@/core/alias.types";
import type { ZuordEq, ZuordEqSome, ZuordEqAll, ZuordIs, ZuordIsSome, ZuordIsAll, ZuordHas, ZuordHasSome, ZuordHasAll, ZuordExclude, ZuordExcludeExact, ZuordExtract, ZuordExtractExact } from "./00_main.types";
import type { ZuordEqNever, ZuordEqSomeNever, ZuordEqAllNever, ZuordIsNever, ZuordIsSomeNever, ZuordIsAllNever, ZuordHasNever, ZuordHasSomeNever, ZuordHasAllNever } from "./01_never.types";
import type { ZuordEqUndefined, ZuordEqSomeUndefined, ZuordEqAllUndefined, ZuordIsUndefined, ZuordIsSomeUndefined, ZuordIsAllUndefined, ZuordHasUndefined, ZuordHasSomeUndefined, ZuordHasAllUndefined, ZuordExcludeUndefined, ZuordExcludeExactUndefined , ZuordExtractUndefined, ZuordExtractExactUndefined } from "./02_undefined.types";
import type { ZuordEqVoid, ZuordEqSomeVoid, ZuordEqAllVoid, ZuordIsVoid, ZuordIsSomeVoid, ZuordIsAllVoid, ZuordHasVoid, ZuordHasSomeVoid, ZuordHasAllVoid, ZuordExcludeVoid, ZuordExcludeExactVoid, ZuordExtractVoid, ZuordExtractExactVoid } from "./03_void.types";
import type { ZuordEqNull, ZuordEqSomeNull, ZuordEqAllNull, ZuordIsNull, ZuordIsSomeNull, ZuordIsAllNull, ZuordHasNull, ZuordHasSomeNull, ZuordHasAllNull, ZuordExcludeNull, ZuordExcludeExactNull, ZuordExtractNull, ZuordExtractExactNull } from "./04_null.types";
import type { ZuordAsAny } from "./any.types";
import type { ZuordIsTrue, ZuordIsSomeTrue, ZuordIsAllTrue, ZuordHasTrue, ZuordHasSomeTrue, ZuordHasAllTrue, ZuordExtractTrue, ZuordExcludeTrue } from "./true.types";
import type { ZuordIsBoolean, ZuordIsSomeBoolean, ZuordIsAllBoolean, ZuordHasBoolean, ZuordHasSomeBoolean, ZuordHasAllBoolean, ZuordExtractBoolean, ZuordExcludeBoolean } from "./boolean.types";
import type { ZuordHasOutcasts, ZuordExtractOutcasts, ZuordExcludeOutcasts } from "./outcasts.types";
import type { ZuordIsFunction } from "./function.types";
import type { ZuordIsObject } from "./object.types";
import type { ZuordPlain, ZuordIsPlain, ZuordIsSomePlain, ZuordIsAllPlain, ZuordHasPlain, ZuordHasNonPlain, ZuordExtractPlain, ZuordExcludePlain, ZuordExtractPlainList } from "./plain.types";
import type { ZuordIsTuple, ZuordIsSomeTuple, ZuordIsAllTuple, ZuordHasTuple, ZuordHasSomeTuple, ZuordHasAllTuple, ZuordExtractTuple, ZuordExcludeTuple } from "./tuple.types";
import type { ZuordArrayIn, ZuordIsArray, ZuordIsSomeArray, ZuordIsAllArray, ZuordHasArray, ZuordHasSomeArray, ZuordHasAllArray, ZuordExtractArray, ZuordExcludeArray as ZuordExcludeArray } from "./array.types";
import type { ZuordArrayDepth } from "./array.types";

export namespace ZuordTrait {

  // MAIN

  export type Eq<A, B> = ZuordEq<A, B>;

  export type EqSome<U extends readonly unknown[], B> = ZuordEqSome<U, B>;

  export type EqAll<U extends readonly unknown[], B> = ZuordEqAll<U, B>;

  export type Is<A, B> = ZuordIs<A, B>;

  export type IsSome<U extends readonly unknown[], B> = ZuordIsSome<U, B>;

  export type IsAll<U extends readonly unknown[], B> = ZuordIsAll<U, B>;

  export type Has<A, B> = ZuordHas<A, B>;

  export type HasSome<U extends readonly unknown[], B> = ZuordHasSome<U, B>;

  export type HasAll<U extends readonly unknown[], B> = ZuordHasAll<U, B>;

  export type Exclude<A, B> = ZuordExclude<A, B>;

  export type ExcludeExact<A, B> = ZuordExcludeExact<A, B>;

  export type Extract<A, B> = ZuordExtract<A, B>;

  export type ExtractExact<A, B> = ZuordExtractExact<A, B>;


  // NEVER

  export type EqNever<T> = ZuordEqNever<T>;

  export type EqSomeNever<U extends readonly unknown[]> = ZuordEqSomeNever<U>;

  export type EqAllNever<U extends readonly unknown[]> = ZuordEqAllNever<U>;

  export type IsNever<T> = ZuordIsNever<T>;

  export type IsSomeNever<U extends unknown[]> = ZuordIsSomeNever<U>;

  export type IsAllNever<U extends unknown[]> = ZuordIsAllNever<U>;

  export type HasNever<T> = ZuordHasNever<T>;

  export type HasSomeNever<U extends readonly unknown[]> = ZuordHasSomeNever<U>;

  export type HasAllNever<U extends readonly unknown[]> = ZuordHasAllNever<U>;


  // UNDEFINED

  export type EqUndefined<T> = ZuordEqUndefined<T>;

  export type EqSomeUndefined<U extends readonly unknown[]> = ZuordEqSomeUndefined<U>;

  export type EqAllUndefined<U extends readonly unknown[]> = ZuordEqAllUndefined<U>;

  export type IsUndefined<T> = ZuordIsUndefined<T>;

  export type IsSomeUndefined<U extends readonly unknown[]> = ZuordIsSomeUndefined<U>;

  export type IsAllUndefined<U extends readonly unknown[]> = ZuordIsAllUndefined<U>;
  
  export type HasUndefined<T> = ZuordHasUndefined<T>;

  export type HasSomeUndefined<U extends readonly unknown[]> = ZuordHasSomeUndefined<U>;

  export type HasAllUndefined<U extends readonly unknown[]> = ZuordHasAllUndefined<U>;

  export type ExcludeUndefined<T> = ZuordExcludeUndefined<T>;
  
  export type ExcludeExactUndefined<T> = ZuordExcludeExactUndefined<T>;

  export type ExtractUndefined<T> = ZuordExtractUndefined<T>;

  export type ExtractExactUndefined<T> = ZuordExtractExactUndefined<T>;


  // VOID

  export type EqVoid<T> = ZuordEqVoid<T>;

  export type EqSomeVoid<U extends readonly unknown[]> = ZuordEqSomeVoid<U>;

  export type EqAllVoid<U extends readonly unknown[]> = ZuordEqAllVoid<U>;

  export type IsVoid<T> = ZuordIsVoid<T>;

  export type IsSomeVoid<U extends readonly unknown[]> = ZuordIsSomeVoid<U>;

  export type IsAllVoid<U extends readonly unknown[]> = ZuordIsAllVoid<U>;

  export type HasVoid<T> = ZuordHasVoid<T>;

  export type HasSomeVoid<U extends readonly unknown[]> = ZuordHasSomeVoid<U>;

  export type HasAllVoid<U extends readonly unknown[]> = ZuordHasAllVoid<U>;

  export type ExcludeVoid<T> = ZuordExcludeVoid<T>;

  export type ExcludeExactVoid<T> = ZuordExcludeExactVoid<T>;

  export type ExtractVoid<T> = ZuordExtractVoid<T>;

  export type ExtractExactVoid<T> = ZuordExtractExactVoid<T>;


  // NULL

  export type EqNull<T> = ZuordEqNull<T>;

  export type EqSomeNull<U extends readonly unknown[]> = ZuordEqSomeNull<U>;

  export type EqAllNull<U extends readonly unknown[]> = ZuordEqAllNull<U>;

  export type IsNull<T> = ZuordIsNull<T>;

  export type IsSomeNull<U extends readonly unknown[]> = ZuordIsSomeNull<U>;

  export type IsAllNull<U extends readonly unknown[]> = ZuordIsAllNull<U>;

  export type HasNull<T> = ZuordHasNull<T>;

  export type HasSomeNull<U extends readonly unknown[]> = ZuordHasSomeNull<U>;

  export type HasAllNull<U extends readonly unknown[]> = ZuordHasAllNull<U>;

  export type ExcludeNull<T> = ZuordExcludeNull<T>;

  export type ExcludeExactNull<T> = ZuordExcludeExactNull<T>;

  export type ExtractNull<T> = ZuordExtractNull<T>;

  export type ExtractExactNull<T> = ZuordExtractExactNull<T>;


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

  // SYMBOL

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


  // UNORDEREDS

  export type HasOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordHasOutcasts<T, I>;
  export type ExtractOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordExtractOutcasts<T, I>;
  export type ExcludeOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordExcludeOutcasts<T, I>;
}