import { modeRecord } from "./mode_.runtime";
import type { $Zuord } from "..";

export const shallow = modeRecord("shallow", false) satisfies $Zuord.Mode.Shallow;

export const inferless = modeRecord("inferless", false) satisfies $Zuord.Mode.Inferless;

export const validate = modeRecord("validate", false) satisfies $Zuord.Mode.Validate;

export const concat = modeRecord("concat", false) satisfies $Zuord.Mode.Concat;

export const unique = modeRecord("unique", false) satisfies $Zuord.Mode.Unique;