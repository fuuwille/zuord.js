export type Unify<T> = {
    [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
};