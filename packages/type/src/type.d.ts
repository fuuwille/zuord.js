import { primitive as $primitive } from "./type.runtime";
import { plain as $plain } from "./type.runtime";
import { array as $array } from "./type.runtime";
import { tuple as $tuple } from "./type.runtime";
import { func as $func } from "./type.runtime";


type zuordTypeAPI = {
    primitive: typeof $primitive;
    plain: typeof $plain;
    array: typeof $array;
    tuple: typeof $tuple;
    func: typeof $func;
}