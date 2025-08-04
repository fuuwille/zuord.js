import { ZuordType } from "@zuord/type";

export namespace Pattern {
    export type Resolve<T> = (
        T extends ZuordType.Plain ? {
            [K in keyof T]?: true | Pattern.Resolve<T[K]>
        } : never
    );
}