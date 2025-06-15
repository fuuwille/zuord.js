export type IsObject<T> = T extends Function ? false
  : T extends Array<unknown> ? T
  : T extends object ? true : false;

export default IsObject;

//

export function isObject(item: any) : item is object {
    return item !== null && typeof item === 'object' && !Array.isArray(item);
}