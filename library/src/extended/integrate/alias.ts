import { plain } from "./plain";
import { array } from "./array";

type integrate = {
    readonly plain: typeof plain;
    readonly array: typeof array;
}

export const integrate: integrate = {
    plain: plain,
    array: array
};