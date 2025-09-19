/**
 * @zuordID tags
 */
export interface ZuordTags {

}

/**
 * @zuordID tags-type
 */
export interface ZuordTypeTags extends ZuordTags {
    id: string;
}

/**
 * @zuordID tags-runtime
 */
export interface ZuordRuntimeTags extends ZuordTags {
    type: string;
}