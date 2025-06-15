import { ZuordIs as Is } from "./index"

export type ZuordUtilIntegrate<A, B, O extends string = ""> = Integrate<A, B, O>;

//

type Integrate<A, B, O extends string = ""> = {
  [K in keyof A | keyof B]: K extends keyof B ? (
    K extends keyof A ? (
      Is.Array<A[K]> extends true ? (
        Is.Array<B[K]> extends true ? (
          IntegrateArray<A[K], B[K], O>
        ) : B[K]
      ) : Is.Plain<A[K]> extends true
          ? Is.Plain<B[K]> extends true
            ? Integrate<A[K], B[K], O>
            : B[K]
          : B[K]
    ) : B[K]
  ) : K extends keyof A
      ? A[K]
      : never;
};

type IntegrateArray<A, B, O extends string = ""> = A extends readonly (infer U)[] ? (
  B extends readonly (infer V)[] ? (
    Is.Exists<O, "concat"> extends true ? (
      Array<U | V>
    ) : Array<V>
  ) : B
) : B;