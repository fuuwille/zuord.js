import { $zuordCore } from "../../internal";
import type { ZuordCore } from "..";

export const shallow = $zuordCore.flags.shallow satisfies ZuordCore.Flags.Shallow;

export const concat = $zuordCore.flags.concat satisfies ZuordCore.Flags.Concat;

export const unique = $zuordCore.flags.unique satisfies ZuordCore.Flags.Unique;