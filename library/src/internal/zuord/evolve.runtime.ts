import { integrate } from "./integrate";
import { merge } from "./merge";

export const plain = <TSource, TContents, TMode>(source : TSource, contents: TContents, mode: TMode) => {
    return resolve(source, contents, mode, integrate.plain, merge.plain);
}

export const array = <TSource, TContents, TMode>(source : TSource, contents: TContents, mode: TMode) => {
    return resolve(source, contents, mode, integrate.array, merge.array);
}

export const resolve = <TSource, TContents, TMode>(source : TSource, contents: TContents, mode: TMode, integrate: (source: any, content: any, mode: any) => any, merge: (contents: any, mode: any) => any) => {
    return integrate(source, merge(contents, mode), mode);
}