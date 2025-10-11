/**
 * Matches a valid project path, starting with a '/' and containing segments of letters, numbers, dots, underscores, or hyphens.
 */
export const path = /^\/(?:[a-zA-Z._-]+\/)*[a-zA-Z._-]*$/;

/**
 * Matches segments of a path, capturing the segment name.
 */
export const pathSegments = /[\/\\]([a-zA-Z0-9_-]+?)(?=[\/\\]|$)/g;

/**
 * Matches a module file name, capturing the module name and extension.
 */
export const moduleName = /^(?:[\/\\][a-zA-Z0-9_-]+)+\/((?!.*\.\.)[a-zA-Z0-9_.-]+?)(\.(?:zschema\.ts|zvariants\.ts|ts|tzs|tzv))$/;