import { zuordIsNever } from "./never";
import { zuordIsFunction } from "./function";
import { zuordIsObject } from "./object";
import { zuordIsPlain } from "./plain";
import { zuordPattern } from "./pattern";

/**
 * 
 */
export namespace zuordUtil {

    // NEVER

    /**
     * 
     */
    export const isNever = zuordIsNever;


    // FUNCTION

    /**
     * 
     */
    export const isFunction = zuordIsFunction;


    // OBJECT

    /**
     * 
     */
    export const isObject = zuordIsObject;


    // PLAIN OBJECT

    /**
     * 
     */
    export const isPlain = zuordIsPlain;


    // PATTERN

    /**
     * 
     */
    export const pattern = zuordPattern;
}