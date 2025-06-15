export type ZuordIsExtends<O, T> = [O] extends [never]
    ? false : (O extends any ? (O extends T ? true : never) : never);