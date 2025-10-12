/**
 * Matches a valid project path, starting with a '/' and containing segments of letters, numbers, dots, underscores, or hyphens.
 */
export const path = /^\/(?:[\w.-]+\/)*[\w.-]*$/;