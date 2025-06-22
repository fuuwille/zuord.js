type IsFunction<T> = [T] extends [Function] ? true : false;

export type { IsFunction as ZuordIsFunction };