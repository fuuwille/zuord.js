type InstanceOf<T> = T extends new (...args: any[]) => infer R ? R : never;

type InstanceTuple<T extends readonly any[]> = {
    [K in keyof T]: InstanceOf<T[K]>
};

export type { InstanceOf as ZuordInstanceOf };
export type { InstanceTuple as ZuordInstanceTuple };