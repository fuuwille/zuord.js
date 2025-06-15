type IsExtends<T, E> = [T] extends [never]
    ? unknown : (T extends any ? (T extends E ? true : never) : never);

//

export type { IsExtends as ZuordIsExtends };