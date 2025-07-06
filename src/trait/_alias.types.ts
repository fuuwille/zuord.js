import { Zuord } from "@/core/alias.types";
import type { ZuordEq, ZuordEqSome, ZuordEqAll, ZuordIs, ZuordIsSome, ZuordIsAll, ZuordHas, ZuordHasSome, ZuordHasAll, ZuordExclude, ZuordExcludeExact, ZuordExtract, ZuordExtractExact } from "./00_main.types";
import type { ZuordEqFunction, ZuordEqSomeFunction, ZuordEqAllFunction, ZuordIsFunction, ZuordIsSomeFunction, ZuordIsAllFunction, ZuordHasFunction, ZuordHasSomeFunction, ZuordHasAllFunction } from "./01_function.types";
import type { ZuordHasOutcasts, ZuordExtractOutcasts, ZuordExcludeOutcasts } from "./outcasts.types";
import type { ZuordIsObject } from "./object.types";
import type { ZuordPlain, ZuordIsPlain, ZuordIsSomePlain, ZuordIsAllPlain, ZuordHasPlain, ZuordHasNonPlain, ZuordExtractPlain, ZuordExcludePlain, ZuordExtractPlainList } from "./plain.types";
import type { ZuordIsTuple, ZuordIsSomeTuple, ZuordIsAllTuple, ZuordHasTuple, ZuordHasSomeTuple, ZuordHasAllTuple, ZuordExtractTuple, ZuordExcludeTuple } from "./tuple.types";
import type { ZuordIsArray, ZuordIsSomeArray, ZuordIsAllArray, ZuordHasArray, ZuordHasSomeArray, ZuordHasAllArray, ZuordExtractArray, ZuordExcludeArray as ZuordExcludeArray } from "./array.types";

export namespace ZuordTrait {

  // 00 - MAIN

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


  // 01 - FUNCTION

  export type EqFunction<T> = ZuordEqFunction<T>;

  export type EqSomeFunction<T extends readonly unknown[]> = ZuordEqSomeFunction<T>;

  export type EqAllFunction<T extends readonly unknown[]> = ZuordEqAllFunction<T>;

  export type IsFunction<T> = ZuordIsFunction<T>;

  export type IsSomeFunction<T extends readonly unknown[]> = ZuordIsSomeFunction<T>;

  export type IsAllFunction<T extends readonly unknown[]> = ZuordIsAllFunction<T>;

  export type HasFunction<T> = ZuordHasFunction<T>;

  export type HasSomeFunction<T extends readonly unknown[]> = ZuordHasSomeFunction<T>;

  export type HasAllFunction<T extends readonly unknown[]> = ZuordHasAllFunction<T>;


  // BIGINT

  // NUMBER

  // STRING

  // SYMBOL

  // UNKNOWN


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