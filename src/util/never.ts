type IsNever<T> = [T] extends [never] ? true : false;

function isNever<T>(value: T): value is never {
    return value === undefined && typeof value === 'undefined';
}

//

export type { IsNever as ZuordIsNever };
export { isNever };