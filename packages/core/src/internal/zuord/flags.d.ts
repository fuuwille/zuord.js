import { shallow as $shallow } from "./flags.runtime";
import { concat as $concat } from "./flags.runtime";

type flagsAPI = {
    shallow: typeof $shallow;
    concat: typeof $concat;
};