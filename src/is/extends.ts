export type ZuordIsExtends<O, T> = [O] extends [never]
    ? unknown : (O extends any ? (O extends T ? true : never) : never);