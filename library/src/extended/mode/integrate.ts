import { zuordCore as core } from "@zuord/core";
import { Integrate } from "./integrate.types";

const plain = core.mode.resolve([core.flags.base, core.flags.concat, core.flags.unique]) satisfies Integrate.Plain;

// EXPORT

type integrate = {
    readonly plain: typeof plain;
}

export const integrate: integrate = {
    plain: plain
};
