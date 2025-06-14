export type ZuordSchema<T> = T extends Array<unknown> ? true
    : T extends object ? { [K in keyof T]: ZuordSchema<T[K]> }
    : true;

export default ZuordSchema;

//

export type IsZuordSchema<T> = T extends true 
    ? true : T extends object ? true : false;