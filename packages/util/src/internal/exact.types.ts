import { ZuordType } from "@zuord/type";

export type Exact<Base, Input> =
  [Base] extends [ZuordType.Plain]
    ? [Input] extends [ZuordType.Plain]
      ? [keyof Input] extends [never]
        ? {}
        : {
            [K in Exclude<keyof Input, Exclude<keyof Input, keyof Base>>]: Exact<Base[K], Input[K]>
          } & {
            [K in Exclude<keyof Input, keyof Base>]: never;
          }
      : never
    : Input extends true ? Input : Base;
