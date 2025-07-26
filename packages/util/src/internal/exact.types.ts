export type Exact<Base, Input> = Base extends object
    ? Input extends object
      ? {
          [K in Exclude<keyof Input, Exclude<keyof Input, keyof Base>>]:
            K extends keyof Input & keyof Base
              ? Exact<Base[K], Input[K]>
              : Input[K];
        } & {
          [K in Exclude<keyof Input, keyof Base>]: never;
        }
      : never
    : Input extends true ? Input : never;