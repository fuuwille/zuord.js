/**
 * @zuordID tags
 */
export interface Tags {

}

/**
 * @zuordID type-tags
 */
export interface TypeTags extends Tags {
    id: string;
}

/**
 * @zuordID runtime-tags
 */
export interface RuntimeTags extends Tags {
    type: string;
}