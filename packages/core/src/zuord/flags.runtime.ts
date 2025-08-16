import { $zuordCore } from "../internal/zuord";
import { Flags } from "./flags.types";

export const shallow = $zuordCore.flags.shallow satisfies Flags.Shallow;

export const concat = $zuordCore.flags.concat satisfies Flags.Concat;

export const unique = $zuordCore.flags.unique satisfies Flags.Unique;

export const base = $zuordCore.flags.base satisfies Flags.Base;