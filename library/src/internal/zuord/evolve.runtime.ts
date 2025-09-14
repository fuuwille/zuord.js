import { integrate } from "./integrate";
import { merge } from "./merge";

/**
 * @internal
 */
export const plain = <TSource, TContents, TMode>(source : TSource, contents: TContents, mode: TMode) => {
    return resolve(source, contents, mode, integrate.plain, merge.plain);
}

/**
 * @internal
 */
export const array = <TSource, TContents, TMode>(source : TSource, contents: TContents, mode: TMode) => {
    return resolve(source, contents, mode, integrate.array, merge.array);
}

/**
 * @internal
 */
export const resolve = <TSource, TContents, TMode>(source : TSource, contents: TContents, mode: TMode, integrate: (source: any, content: any, mode: any) => any, merge: (contents: any, mode: any) => any) => {
    return integrate(source, merge(contents, mode), mode);
}