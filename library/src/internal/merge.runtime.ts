import { integrate } from "./integrate";

const $ = <TContent, TMode>(content: TContent, mode: TMode, integrate: (base: any, input: any, mode: any) => any) => {
    if (!Array.isArray(content) || content.length == 0) return {};

    return content.reduce((acc, current) => {
        if (acc === undefined) return current;
        return integrate(acc, current, mode);
    });
}

export const unknown = <TContent, TMode>(content: TContent, mode: TMode) => {
    return $(content, mode, integrate.unknown);
}

export const plain = <TContent, TMode>(content: TContent, mode: TMode) => {
    return $(content, mode, integrate.plain);
}