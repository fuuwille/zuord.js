import { modeRecord } from "./_runtime";
import type { $ZuordCore } from "..";

export const shallow = modeRecord("shallow", false) satisfies $ZuordCore.Mode.Shallow;

export const inferless = modeRecord("inferless", false) satisfies $ZuordCore.Mode.Inferless;

export const validate = modeRecord("validate", false) satisfies $ZuordCore.Mode.Validate;

export const concat = modeRecord("concat", false) satisfies $ZuordCore.Mode.Concat;

export const unique = modeRecord("unique", false) satisfies $ZuordCore.Mode.Unique;