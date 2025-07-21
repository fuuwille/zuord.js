export type Partialize<T> = T extends object ? {
    [K in keyof T]?: Partialize<T[K]>;
} : T;