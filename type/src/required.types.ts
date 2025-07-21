export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

export type RequiredOnly<T> = Pick<T, RequiredKeys<T>>;