import { integrate as $integrate } from "./extended/integrate";
import { mode as $mode } from './mode';

export const integrate = $integrate.plain.restrict;

export const integrateArray = $integrate.array.loose;

export const mode = $mode;