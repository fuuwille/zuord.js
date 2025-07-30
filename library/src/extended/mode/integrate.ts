import { zuordCore as core } from "@zuord/core";
import { Integrate } from "./integrate.types";

const plain = core.mode.resolve([core.flags.base, core.flags.concat]) satisfies Integrate.Plain;

const array = core.mode.resolve([core.flags.base, core.flags.concat, core.flags.unique]) satisfies Integrate.Array;

// EXPORT

type integrate = {
    readonly plain: typeof plain;
    readonly array: typeof array;
}

export const integrate: integrate = {
    plain: plain,
    array: array
};