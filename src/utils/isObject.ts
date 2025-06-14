export type IsObject<T> = T extends object ? (T extends Function ? false : true) : false;

export default IsObject;

//

export function isObject(item: any) : item is object {
    return item !== null && typeof item === 'object' && !Array.isArray(item);
}