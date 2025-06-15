type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

export type { IsFunction as ZuordIsFunction };