/**
 * Matches a valid project path, starting with a '/' and containing segments of letters, numbers, dots, underscores, or hyphens.
 */
export const path = /^\/(?:[\w.-]+\/)*[\w.-]*$/;

/**
 * Matches segments of a path, capturing the segment name.
 */
export const pathSegments = /[\/\\]([\w.-]+?)(?=[\/\\]|$)/g;

/**
 * Matches a module file name, capturing the module name and extension.
 */
export const moduleName = /^(?:[\/\\][\w.-]+)+\/((?!.*\.\.)[\w.-]+?)(\.(?:zschema\.ts|zvariants\.ts|ts|tzs|tzv))$/;