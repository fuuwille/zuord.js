type Optional<T> = {
    [K in keyof T]?: T[K] extends object ? Optional<T[K]> : T[K];
};

export type { Optional as ZuordOptional };