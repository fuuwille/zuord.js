type ValueAt<U, K extends PropertyKey> = U extends any ? (K extends keyof U ? U[K] : never) : never;

export type { ValueAt as ZuordValueAt };