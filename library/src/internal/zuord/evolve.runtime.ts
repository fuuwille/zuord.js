import { integrate } from "./integrate";
import { merge } from "./merge";

const $ = <TBase, TContent, TMode>(base : TBase, content: TContent, mode: TMode, integrate: (base: any, input: any, mode: any) => any, merge: (content: any, mode: any) => any) => {
    return integrate(base, merge(content, mode), mode);
}

export const unknown = <TBase, TContent, TMode>(base : TBase, content: TContent, mode: TMode) => {
    return $(base, content, mode, integrate.any, merge.unknown);
}

export const plain = <TBase, TContent, TMode>(base : TBase, content: TContent, mode: TMode) => {
    return $(base, content, mode, integrate.plain, merge.plain);
}

export const array = <TBase, TContent, TMode>(base : TBase, content: TContent, mode: TMode) => {
    return $(base, content, mode, integrate.array, merge.array);
}