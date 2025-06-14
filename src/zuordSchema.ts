import ZuordNormalize from "./zuordNormalize";

export type ZuordSchema<T> = ZuordNormalize<ZuordSchemaRaw<T>>

export default ZuordSchema;

//

export type ZuordSchemaRaw<T> = true | {
    [K in keyof T]?: T[K] extends Array<unknown>
        ? true
        : T[K] extends object
            ? ZuordSchemaRaw<T[K]>
            : T[K] extends undefined
                ? never
                : true;
}

export type IsZuordSchema<T> = T extends true 
    ? true : T extends object ? true : false;

//

export function zuordSchema<T extends object, S extends ZuordSchema<T>>(_: T, sch: S): S {
    return sch;
}
