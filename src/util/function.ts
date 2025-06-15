type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

function isFunction(value: unknown): value is (...args: any[]) => unknown {
    return typeof value === 'function';
}

//

export type { IsFunction as ZuordIsFunction };
export { isFunction };