type IsPlain<T> = 
    T extends Function ? false :
    T extends readonly any[] ? false :
    T extends object ? true : false;
    
export type { IsPlain as ZuordIsPlain };