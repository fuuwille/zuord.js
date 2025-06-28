type IsBoolean<T> = [T] extends [boolean] ? true : false;

export type { IsBoolean as ZuordIsBoolean };