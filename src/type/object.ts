import { ZuordType } from "./_alias.types";


// IS OBJECT

function isObject(item: any) : item is ZuordType.Object {
    return item !== null && typeof item === 'object';
}

export { isObject as zuordIsObject };