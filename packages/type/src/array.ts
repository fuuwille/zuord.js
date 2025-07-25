export function array(value: unknown): value is unknown[] {
    return Array.isArray(value);
}

export function arrayOf<T>(value: unknown, checkItem: (item: unknown) => item is T): value is readonly T[] {
    if (!array(value)) return false;
    return value.every(checkItem);
}