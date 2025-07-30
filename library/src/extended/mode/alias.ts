import { integrate } from "./integrate";

type mode = {
    readonly integrate: typeof integrate;
}

export const mode: mode = {
    integrate: integrate
};