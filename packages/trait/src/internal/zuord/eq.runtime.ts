export function both(a: unknown, b: unknown): boolean {
    return a === b;
}

export function any(u1: unknown[], t2: unknown): boolean {
    return u1.some((item) => both(item, t2));
}