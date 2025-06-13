export type IsObject<T> = T extends object ? (T extends Function ? false : true) : false;

export default IsObject;