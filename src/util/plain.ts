function isPlain(item: any): item is object {
    return item !== null && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date);
}

export { isPlain as zuordIsPlain };