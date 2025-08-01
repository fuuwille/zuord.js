import { integrate } from "./integrate.runtime";

type mode = {
    readonly integrate: typeof integrate;
}

export const mode: mode = {
    integrate: integrate
};