function isNever<T>(value: T): value is never {
    return value === undefined && typeof value === 'undefined';
}

export { isNever as zuordIsNever };