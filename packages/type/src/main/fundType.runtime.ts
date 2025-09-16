import type { FundType } from ".";

export function primitive(obj: unknown): obj is FundType.Primitive {
    return obj === null || (typeof obj !== "object" && typeof obj !== "function");
}

export function plain<TKey extends PropertyKey, TItem extends unknown>(obj: unknown, type?: { key?: (z: unknown) => z is TKey, item?: (z: unknown) => z is TItem }) : obj is FundType.Plain<TKey, TItem> {
    if (typeof obj !== 'object' || obj === null) return false;

    if (Object.getPrototypeOf(obj) !== Object.prototype) return false;

    if(type) {
        const entries = Object.entries(obj);

        for (const [key, value] of entries) {
            if (type.key && !type.key(key)) return false;
            if (type.item && !type.item(value)) return false;
        }
    }

    return true;
}

export function array<T extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is T }): obj is FundType.Array<T> {
    if (globalThis.Array.isArray(obj)) {
        if (type && type.item) {
            return obj.every(type.item);
        }
        return true;
    }
    return false;
}

export function tuple<TItem extends unknown = unknown>(obj: unknown, type?: { item?: (z: unknown) => z is TItem }): obj is FundType.Tuple<TItem> {
    return array(obj, type);
}

export function func(obj : unknown): obj is FundType.Func {
    return typeof obj === "function";
}