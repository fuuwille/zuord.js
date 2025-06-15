import { ZuordIs as Is } from "../is/index"

export type ZuordUtilIntegrate<A, B, O extends string = ""> = {
  [K in keyof A | keyof B]: K extends keyof B ? (
    K extends keyof A ? (
      Is.Exists<O, "concat"> extends true ? (
        Is.Array<A[K]> extends true ? (
          Is.Array<B[K]> extends true ? (
            A[K] extends readonly (infer U)[] ? (
              B[K] extends readonly (infer V)[] ? (
                Array<U | V>
              ): B[K]
            ) : B[K]
          ) : B[K]
        ) : B[K]
      ) : Is.Plain<A[K]> extends true
          ? Is.Plain<B[K]> extends true
            ? ZuordUtilIntegrate<A[K], B[K], O>
            : B[K]
          : B[K]
    ) : B[K]
  ) : K extends keyof A
      ? A[K]
      : never;
};