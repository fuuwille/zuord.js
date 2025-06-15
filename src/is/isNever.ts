export type IsNever<T> = [T] extends [never] ? true : false;

export function isNever<T>(value: T): value is never {
    return value === undefined && typeof value === 'undefined';
}