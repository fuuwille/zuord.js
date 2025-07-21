
// IS OBJECT

export function isObject(item: any) : item is object {
    return item !== null && typeof item === 'object';
}