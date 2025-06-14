export type ZuordSchema = true | { [key: string]: ZuordSchema };

export default ZuordSchema;

//

export type ZuordSchemaOf<T> = true | (T extends object ? {
    [K in keyof T]?: T[K] extends object
        ? ZuordSchemaOf<T[K]> : true;
} : never);

export type IsZuordSchema<T> = T extends true 
    ? true : T extends object ? true : false;