import { zuordIsNever } from "./never";
import { zuordIsFunction } from "./function";
import { zuordIsObject } from "./object";
import { zuordIsPlain } from "./plain";

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


    // PLAIN

    /**
     * 
     */
    export const isPlain = zuordIsPlain;
}