import { ZuordIsExists } from "../is/exists"
import { ZuordIsArray } from "../is/array";
import { ZuordIsPlain } from "../is/plain";

export type ZuordUtilIntegrate<A, B, O extends string = ""> = {
  [K in keyof A | keyof B]:
    K extends keyof B
      ? K extends keyof A
        ? ZuordIsExists<O, "concat" | "Lola"> extends true
          ? ZuordIsArray<A[K]> extends true
            ? ZuordIsArray<B[K]> extends true
              ? A[K] extends readonly (infer U)[]
                ? B[K] extends readonly (infer V)[]
                  ? Array<U | V> // ✅ concat ve her ikisi array
                  : B[K]
                : B[K]
              : B[K]
            : B[K]
          : ZuordIsPlain<A[K]> extends true
            ? ZuordIsPlain<B[K]> extends true
              ? ZuordUtilIntegrate<A[K], B[K], O>
              : B[K]
            : B[K]
        : B[K]
      : K extends keyof A
        ? A[K]
        : never;
};