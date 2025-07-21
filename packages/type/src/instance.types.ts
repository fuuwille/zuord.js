export type InstanceOf<T> = T extends new (...args: any[]) => infer R ? R : never;

export type InstanceTuple<T> = {
    [K in keyof T]: InstanceOf<T[K]>
};