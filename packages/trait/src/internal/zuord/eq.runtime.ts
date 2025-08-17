export function both(t1: unknown, t2: unknown): boolean {
    return t1 === t2;
}

export function any(u1: unknown[], t2: unknown): boolean {
    return u1.some((item) => both(item, t2));
}