type InstanceOf<T> = T extends new (...args: any[]) => infer R ? R : never;

export type { InstanceOf as ZuordInstanceOf };