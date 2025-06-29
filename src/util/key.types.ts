import { ZuordUtil } from "@/util/_alias.types";

type IsKey<T, K> = K extends keyof T ? true : false;

type IsRequiredKey<T, K extends PropertyKey> = undefined extends ZuordUtil.ValueAt<T, K> ? false : true;

type HasKey<T, K> = true extends (K extends keyof T ? true : false) ? true : false;

type AnyHasKey<U extends readonly unknown[], K> = [HasKey<U[number], K>] extends [true] ? true : false;

type AllHasKey<U extends readonly unknown[], K> = [HasKey<U[number], K>] extends [boolean] ? false : true;

type KeysOf<U> = U extends any ? keyof U : never;

type RequiredKeysOf<T> = {
  [K in ZuordUtil.KeysOf<T>]-?: IsRequiredKey<T, K> extends true ? K : never
}[ZuordUtil.KeysOf<T>];

type OptionalKeysOf<U> = {
  [K in ZuordUtil.KeysOf<U>]-?: IsRequiredKey<U, K> extends false ? K : never
}[ZuordUtil.KeysOf<U>];

export type { IsKey as ZuordIsKey };
export type { IsRequiredKey as ZuordIsRequiredKey };
export type { HasKey as ZuordHasKey };
export type { AnyHasKey as ZuordAnyHasKey };
export type { AllHasKey as ZuordAllHasKey };
export type { KeysOf as ZuordKeysOf };
export type { RequiredKeysOf as ZuordRequiredKeysOf };
export type { OptionalKeysOf as ZuordOptionalKeysOf };