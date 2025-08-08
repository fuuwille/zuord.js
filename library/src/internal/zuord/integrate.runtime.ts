import { zuordType, ZuordType } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export const any = <TBase, TInput, TMode>(base: TBase, input: TInput, mode: TMode) => {
    if(zuordType.plain(base) && zuordType.plain(input)) {
        return plain(base, input, mode);
    }

    if(zuordType.array(base) && zuordType.array(input)) {
        return array(base, input, mode);
    }

    return input;
}

export const plain = <TBase extends ZuordType.Plain, TInput extends ZuordType.Plain, TMode>(base: TBase, input: TInput, mode: TMode ) => {
    const { shallow } = mode as Core.Mode.Field;

    const result: any = {};
    const stack: Array<{ target: ZuordType.Plain; sourceA: ZuordType.Plain; sourceB: ZuordType.Plain }> = [{ target: result, sourceA: base, sourceB: input }];

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
                target[key] = array(valA, valB, mode);
            } else if (valB !== undefined && zuordType.plain(valA) && zuordType.plain(valB)) {
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

export const array = <TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode>(base: TBase, input: TInput, mode: TMode) => {
    const { concat, unique } = mode as Core.Mode.Field;

    if (concat) {
        return unique ? Array.from(new Set([...base, ...input])) : [...base, ...input];
    }

    return input;
}