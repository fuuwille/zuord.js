export type Mode<K extends string, V extends unknown> = {
    [P in K]: V;
}