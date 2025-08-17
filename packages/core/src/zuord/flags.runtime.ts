import { $zuordCore } from "@zuord/core/internal";
import type { ZuordCore } from "@zuord/core";

export const shallow = $zuordCore.flags.shallow satisfies ZuordCore.Flags.Shallow;

export const concat = $zuordCore.flags.concat satisfies ZuordCore.Flags.Concat;

export const unique = $zuordCore.flags.unique satisfies ZuordCore.Flags.Unique;

export const base = $zuordCore.flags.base satisfies ZuordCore.Flags.Base;