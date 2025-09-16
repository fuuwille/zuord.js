/**
 * @internal
 */
export const plain = <TSource, TPattern, TMode>(plain: TSource, pattern: TPattern, _mode: TMode) => {
    const result: any = {};
    const stack: Array<{ source: any; pattern: any; target: any }> = [
        { source: plain, pattern, target: result },
    ];

    while (stack.length > 0) {
        const { source, pattern, target } = stack.pop()!;
        const keys = Object.keys(source);

        for (const key of keys) {
            if (pattern.hasOwnProperty(key)) {
                const patternValue = pattern[key];
                const sourceValue = source[key];

                if (patternValue === true) {
                    target[key] = sourceValue;
                } else if (typeof patternValue === "object" && patternValue !== null) {
                    target[key] = {};
                    stack.push({ source: sourceValue, pattern: patternValue, target: target[key] });
                }
            }
        }
    }

    return result;
};