type IsPlain<T> = 
    T extends Function ? false :
    T extends unknown[] ? false :
    T extends object ? true : false;
    
export type { IsPlain as ZuordIsPlain };