type IsBoolean<T> = [T] extends [boolean] ? true : false;

type IsBooleanTrue<T> = [T] extends [true] ? true : false;

export type { IsBoolean as ZuordIsBoolean };

export type { IsBooleanTrue as ZuordIsBooleanTrue };