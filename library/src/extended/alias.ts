import { integrate } from "./integrate";
import { mode } from "./mode";

type zuordX = {
    readonly integrate: typeof integrate;
    readonly mode: typeof mode;
}

export const zuordX: zuordX = {
    integrate: integrate,
    mode: mode
};