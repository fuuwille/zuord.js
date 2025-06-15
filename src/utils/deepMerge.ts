import { ZuordIsArray } from "../is/array";
import { ZuordIsPlain } from "../is/plain";

export type DeepMerge<A, B> = {
  [K in keyof A | keyof B]:
    K extends keyof B
      ? K extends keyof A
        ? ZuordIsArray<A[K]> extends true
          ? ZuordIsArray<B[K]> extends true
            ? Array<
                A[K] extends readonly (infer U)[] 
                  ? B[K] extends readonly (infer V)[]
                    ? U | V
                    : U
                  : never
              >
            : B[K]
          : ZuordIsPlain<A[K]> extends true
          ? ZuordIsPlain<B[K]> extends true
            ? DeepMerge<A[K], B[K]>
            : B[K]
          : B[K]
        : B[K]
      : K extends keyof A
      ? A[K]
      : never;
};