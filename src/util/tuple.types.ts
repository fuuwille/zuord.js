type IsTuple<T> = T extends readonly any[] ? (
    [number] extends [T['length']] ? false : true
) : false;

export type { IsTuple as ZuordIsTuple };