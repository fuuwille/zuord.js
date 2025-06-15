export type ZuordIsFunction<T> = T extends (...args: any[]) => any ? true : false;

export function isFunction(value: unknown): value is (...args: any[]) => unknown {
    return typeof value === 'function';
}