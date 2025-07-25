export const pick = <T, P>(plain: T, pattern: P) => {
    const result: any = {};
    const stack: Array<{ source: any; pattern: any; target: any }> = [
        { source: plain, pattern, target: result },
    ];

    while (stack.length > 0) {
        const { source, pattern, target } = stack.pop()!;

        for (const key in pattern) {
            if (pattern.hasOwnProperty(key) && key in source) {
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
