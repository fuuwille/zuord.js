
// IS OBJECT

function isObject(item: any) : item is object {
    return item !== null && typeof item === 'object';
}

export { isObject as zuordIsObject };