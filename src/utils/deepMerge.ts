import { IsArray } from "./isArray";
import { IsPlainObject } from "./isPlainObject";

export type DeepMerge<A, B> = {
  [K in keyof A | keyof B]:
    K extends keyof B
      ? K extends keyof A
        ? IsArray<A[K]> extends true
          ? IsArray<B[K]> extends true
            ? Array<
                A[K] extends readonly (infer U)[] 
                  ? B[K] extends readonly (infer V)[]
                    ? U | V
                    : U
                  : never
              >
            : B[K]
          : IsPlainObject<A[K]> extends true
          ? IsPlainObject<B[K]> extends true
            ? DeepMerge<A[K], B[K]>
            : B[K]
          : B[K]
        : B[K]
      : K extends keyof A
      ? A[K]
      : never;
};