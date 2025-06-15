import { ZuordUtil } from "../index"

export type ZuordUtilIntegrate<A, B, O extends string = ""> = Integrate<A, B, O>;

//
type Integrate<A, B, O extends string = ""> = {
  [K in keyof A | keyof B]: K extends keyof B ? (
    K extends keyof A ? (
      ZuordUtil.IsArray<A[K]> extends true ? (
        ZuordUtil.IsArray<B[K]> extends true ? (
          IntegrateArray<A[K], B[K], O>
        ) : B[K]
      ) : ZuordUtil.IsPlain<A[K]> extends true
          ? ZuordUtil.IsPlain<B[K]> extends true
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
    ZuordUtil.IsExists<O, "concat"> extends true ? (
      Array<U | V>
    ) : Array<V>
  ) : B
) : B;