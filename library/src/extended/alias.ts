import { integrate } from "./integrate";
import { mode } from "./mode";

type x = {
    readonly integrate: typeof integrate;
    readonly mode: typeof mode;
}

export const x: x = {
    integrate: integrate,
    mode: mode
};