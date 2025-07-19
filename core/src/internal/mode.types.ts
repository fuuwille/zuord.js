export type Mode<K extends string = string, V extends unknown = boolean> = {
    [P in K]: V;
}