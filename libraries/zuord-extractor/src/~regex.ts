/**
 * Matches a valid project path, starting with a '/' and containing segments of letters, numbers, dots, underscores, or hyphens.
 */
export const path = /^\/(?:[\w.-]+\/)*[\w.-]*$/;

/**
 * Matches a valid project file name, consisting of a name and an extension.
 */
export const fileName = /^([\w-]+)\.(ts|tzs|tzv|zschema.ts|zvariants.ts)$/;