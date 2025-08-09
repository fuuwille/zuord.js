import type { ZuordType as Type } from ".";

export function primitive(obj: unknown): obj is Type.Primitive {
    return obj === null || (typeof obj !== "object" && typeof obj !== "function");
}