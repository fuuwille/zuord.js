import { $zuord } from "../../internal";
import type { Zuord } from "..";

export const shallow = $zuord.mode.shallow satisfies Zuord.Mode.Shallow;

export const inferless = $zuord.mode.inferless satisfies Zuord.Mode.Inferless;

export const validate = $zuord.mode.validate satisfies Zuord.Mode.Validate;

export const concat = $zuord.mode.concat satisfies Zuord.Mode.Concat;

export const unique = $zuord.mode.unique satisfies Zuord.Mode.Unique;