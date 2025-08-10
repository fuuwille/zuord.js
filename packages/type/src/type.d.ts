import { primitive as $primitive } from "./type.runtime";
import { plain as $plain } from "./type.runtime";

type zuordTypeAPI = {
    primitive: typeof $primitive;
    plain: typeof $plain;
}