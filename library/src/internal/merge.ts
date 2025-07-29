import { integrate } from "./integrate";

const object = <TContent, TMode>(content: TContent, mode: TMode)=> {
    if (!Array.isArray(content) || content.length == 0) return {};

    return content.reduce((acc, current) => {
        if (acc === undefined) return current;
        return integrate.unknown(acc, current, mode, false);
    });
}

type merge = {
    object: typeof object;
}

export const merge: merge = {
    object
}