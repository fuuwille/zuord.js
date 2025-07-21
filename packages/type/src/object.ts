
// IS OBJECT

export function object(item: any) : item is object {
    return item !== null && typeof item === 'object';
}