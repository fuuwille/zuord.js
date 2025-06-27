type Optional<T> = T extends object ? {
  [K in keyof T]?: Optional<T[K]>;
} : T;

export type { Optional as ZuordOptional };