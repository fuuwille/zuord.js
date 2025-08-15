import { first as $first } from "./tuple.runtime";
import { last as $last } from "./tuple.runtime";

type zuordTupleAPI = {
    first: typeof $first;
    last: typeof $last;
}