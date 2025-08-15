import { nest as $nest } from "./array.runtime";
import { empty as $empty } from "./array.runtime";

type zuordArrayAPI = {
    nest: typeof $nest;
    empty: typeof $empty;
};

export declare const zuordArray: zuordArrayAPI;

export { ZuordArray } from "./array.types";