import { integrate } from "./integrate";

export const plain = <TContents, TMode>(contents: TContents, mode: TMode) => {
    return resolve(contents, mode, integrate.plain);
}

export const array = <TContents, TMode>(contents: TContents, mode: TMode) => {
    return resolve(contents, mode, integrate.array);
}

export const resolve = <TContent, TMode>(content: TContent, mode: TMode, integrate: (source: any, content: any, mode: any) => any) => {
    if (!Array.isArray(content) || content.length == 0) return {};

    return content.reduce((acc, current) => {
        if (acc === undefined) return current;
        return integrate(acc, current, mode);
    });
}