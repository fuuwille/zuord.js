import { Zuord } from "@/core/alias.types";
import type { ZuordHasOutcasts, ZuordExtractOutcasts, ZuordExcludeOutcasts } from "./outcasts.types";

export namespace ZuordTrait {

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