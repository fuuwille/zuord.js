export type ZuordSchema = true | { [key: string]: ZuordSchema };

export default ZuordSchema;

//

export type IsZuordSchema<T> = T extends true 
    ? true : T extends object ? true : false;