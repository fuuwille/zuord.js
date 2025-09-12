import { $zuordCore } from "../../internal";
import type { ZuordCore } from "..";

export const shallow = $zuordCore.mode.shallow satisfies ZuordCore.Mode.Shallow;

export const inferless = $zuordCore.mode.inferless satisfies ZuordCore.Mode.Inferless;

export const validate = $zuordCore.mode.validate satisfies ZuordCore.Mode.Validate;

export const concat = $zuordCore.mode.concat satisfies ZuordCore.Mode.Concat;

export const unique = $zuordCore.mode.unique satisfies ZuordCore.Mode.Unique;