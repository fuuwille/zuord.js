function isObject(item: any) : item is object {
    return item !== null && typeof item === 'object' && !Array.isArray(item);
}

export { isObject };