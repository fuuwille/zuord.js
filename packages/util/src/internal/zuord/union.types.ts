export namespace Union {
    export type ToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

    export type ToLast<U> = ToIntersection<U extends any ? () => U : never> extends () => infer L ? L : never;
}