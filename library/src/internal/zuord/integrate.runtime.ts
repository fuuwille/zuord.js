import { zuordType, ZuordType } from "@zuord/type";
import { zuordCore, ZuordCore } from "@zuord/core";
import { $ZuordMode } from "../mode";

export const plain = <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain, TMode extends $ZuordMode.ModeUpdate<$ZuordMode.Integrate.Plain>>(source: TSource, content: TContent, mode: TMode) => {
    if(!zuordType.plain(source)) {
        throw new TypeError("[Zuord-Integrate]: Expected source to be a plain object");
    }

    if(!zuordType.plain(content)) {
        throw new TypeError("[Zuord-Integrate]: Expected content to be a plain object");
    }

    return resolvePlain(source, content, zuordCore.mode.resolve(mode));
}

export const resolvePlain = <TBase extends ZuordType.Plain, TInput extends ZuordType.Plain, TMode>(base: TBase, input: TInput, mode: TMode ) => {
    const { shallow } = mode as ZuordCore.Mode.Flags;

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
                target[key] = resolveArray(valA, valB, mode);
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

export const array = <TSource extends ZuordType.Array, TContent extends ZuordType.Array, TModeUpdate extends $ZuordMode.ModeUpdate<$ZuordMode.Integrate.Array>>(source: TSource, content: TContent, modeUpdate: TModeUpdate) => {
    if(!zuordType.array(source)) {
        throw new TypeError("[Zuord-Integrate]: Expected source to be an array");
    }

    if(!zuordType.array(content)) {
        throw new TypeError("[Zuord-Integrate]: Expected content to be an array");
    }

    return resolveArray(source, content, zuordCore.mode.resolve(modeUpdate));
}

export const resolveArray = <TSource extends ZuordType.Array, TContent extends ZuordType.Array, TMode>(source: TSource, content: TContent, mode: TMode) => {
    const { concat, unique } = mode as ZuordCore.Mode.Flags;

    if (concat) {
        return unique ? Array.from(new Set([...source, ...content])) : [...source, ...content];
    }

    return content;
}