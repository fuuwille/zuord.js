import { Zuord } from "@/core/alias.types";
import type { ZuordEq, ZuordEqSome, ZuordEqAll, ZuordIs, ZuordIsSome, ZuordIsAll, ZuordHas, ZuordHasSome, ZuordHasAll, ZuordExclude, ZuordExcludeExact, ZuordExtract, ZuordExtractExact } from "./00_main.types";
import type { ZuordHasOutcasts, ZuordExtractOutcasts, ZuordExcludeOutcasts } from "./outcasts.types";

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


  // BIGINT

  // NUMBER

  // STRING

  // SYMBOL

  // UNKNOWN
  

  // UNORDEREDS

  export type HasOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordHasOutcasts<T, I>;
  export type ExtractOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordExtractOutcasts<T, I>;
  export type ExcludeOutcasts<T, I extends Zuord.Outcasts = Zuord.DefaultOutcasts> = ZuordExcludeOutcasts<T, I>;
}