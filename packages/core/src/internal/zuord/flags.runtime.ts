import { mode } from "./mode";
import type { $ZuordCore } from "../../internal";

export const shallow = mode.flags("shallow", false) satisfies $ZuordCore.Flags.Shallow;

export const inferless = mode.flags("inferless", false) satisfies $ZuordCore.Flags.Inferless;

export const validate = mode.flags("validate", false) satisfies $ZuordCore.Flags.Validate;

export const concat = mode.flags("concat", false) satisfies $ZuordCore.Flags.Concat;

export const unique = mode.flags("unique", false) satisfies $ZuordCore.Flags.Unique;