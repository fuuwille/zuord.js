import { plain } from "./plain";

type integrate = {
    readonly plain: typeof plain;
}

export const integrate: integrate = {
    plain: plain
};