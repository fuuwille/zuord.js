export type DeepMerge<A, B> = {
    [K in keyof A | keyof B]: K extends keyof B
        ? K extends keyof A
            ? A[K] extends object
                ? B[K] extends object
                    ? DeepMerge<A[K], B[K]>
                    : B[K]
                : B[K]
            : B[K]
        : K extends keyof A
        ? A[K] : never;
};