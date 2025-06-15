type IsObject<T> = T extends Function ? false
  : T extends Array<unknown> ? T
  : T extends object ? true : false;

function isObject(item: any) : item is object {
    return item !== null && typeof item === 'object' && !Array.isArray(item);
}

//

export type ZuordIsObject<T> = IsObject<T>;

export { isObject };