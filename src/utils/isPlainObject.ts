export type IsPlainObject<T> = 
    T extends Function ? false :
    T extends readonly any[] ? false :
    T extends object ? true : false;