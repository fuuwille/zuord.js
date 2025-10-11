export const path = /^\/(?:[a-zA-Z._-]+\/)*[a-zA-Z._-]*$/;

export const pathSegments = /[\/\\]([a-zA-Z0-9_-]+?)(?=[\/\\]|$)/g;

export const moduleName = /^(?:[\/\\][a-zA-Z0-9_-]+)+\/((?!.*\.\.)[a-zA-Z0-9_.-]+?)(\.(?:zschema\.ts|zvariants\.ts|ts|tzs|tzv))$/;