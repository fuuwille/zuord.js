import { fundType, FundType } from "@zuord/type";
import { Zuord } from "zuord";
import { $ProduceMode } from "../produceMode";

/**
 * @internal
 */
export const plain = <TSource extends FundType.Plain, TContent extends FundType.Plain, TMode extends $ProduceMode.Integrate.Plain>(source: TSource, content: TContent, mode: TMode) => {
    if(!fundType.plain(source)) {
        throw new TypeError("[Zuord-Integrate]: Expected source to be a plain object");
    }

    if(!fundType.plain(content)) {
        throw new TypeError("[Zuord-Integrate]: Expected content to be a plain object");
    }

    return resolvePlain(source, content, mode) as FundType.Plain;
}

/**
 * @internal
 */
export const resolvePlain = <TBase extends FundType.Plain, TInput extends FundType.Plain, TMode>(base: TBase, input: TInput, mode: TMode ) => {
    const { shallow } = mode as Zuord.ModeRecord;

    const result: any = {};
    const stack: Array<{ target: FundType.Plain; sourceA: FundType.Plain; sourceB: FundType.Plain }> = [{ target: result, sourceA: base, sourceB: input }];

    while (stack.length) {
        const { target, sourceA, sourceB } = stack.pop()!;

        if (shallow) {
            Object.assign(target, sourceA, sourceB);
            continue;
        }

        const keys = new Set([...Object.keys(sourceA || {}), ...Object.keys(sourceB || {})]);

        keys.forEach(key => {
            const valA = sourceA?.[key];
            const valB = sourceB?.[key];

            if (Array.isArray(valA) && Array.isArray(valB)) {
                target[key] = resolveArray(valA, valB, mode);
            } else if (valB !== undefined && fundType.plain(valA) && fundType.plain(valB)) {
                stack.push({ target: target[key] = {}, sourceA: valA, sourceB: valB });
            } else if (valB !== undefined) {
                target[key] = valB;
            } else {
                target[key] = valA;
            }
        });
    }

    return result;
}

/**
 * @internal
 */
export const array = <TSource extends FundType.Array, TContent extends FundType.Array, TMode extends $ProduceMode.Integrate.Array>(source: TSource, content: TContent, mode: TMode) => {
    if(!fundType.array(source)) {
        throw new TypeError("[Zuord-Integrate]: Expected source to be an array");
    }

    if(!fundType.array(content)) {
        throw new TypeError("[Zuord-Integrate]: Expected content to be an array");
    }

    return resolveArray(source, content, mode) as FundType.Array;
}

/**
 * @internal
 */
export const resolveArray = <TSource extends FundType.Array, TContent extends FundType.Array, TMode>(source: TSource, content: TContent, mode: TMode) => {
    const { concat, unique } = mode as Zuord.ModeRecord;

    if (concat) {
        return unique ? Array.from(new Set([...source, ...content])) : [...source, ...content];
    }

    return content;
}