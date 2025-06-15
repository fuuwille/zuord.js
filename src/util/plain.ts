type IsPlain<T> = 
    T extends Function ? false :
    T extends readonly any[] ? false :
    T extends object ? true : false;

function isPlain(item: any): item is object {
    return item !== null && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date);
}

//

export type ZuordIsPlain<T> = IsPlain<T>;

export { isPlain };