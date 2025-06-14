export type ZuordSchema<T> = true | (T extends object ? {
    [K in keyof T]?: T[K] extends object
        ? ZuordSchema<T[K]> : true;
} : never);

export default ZuordSchema;

//

export type IsZuordSchema<T> = T extends true 
    ? true : T extends object ? true : false;