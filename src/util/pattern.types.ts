type IsPattern<T> = T extends true 
    ? true : T extends object ? true : false;

export type { IsPattern as ZuordIsPattern };