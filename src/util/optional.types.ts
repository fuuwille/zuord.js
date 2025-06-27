type Optional<T> = {
    [K in keyof T]?: (T[K] extends object ? Optional<T[K]> : T[K]) | undefined;
};

export type { Optional as ZuordOptional };