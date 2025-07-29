import { integrate } from "./integrate";

export const merge = <TContent, TMode>(content: TContent, mode: TMode)=> {
    if (!Array.isArray(content) || content.length == 0) return {};

    return content.reduce((acc, current) => {
        if (acc === undefined) return current;
        return integrate.object(acc, current, mode, false);
    });
}