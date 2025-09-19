import { fileURLToPath, pathToFileURL } from "node:url";
import { existsSync } from "node:fs";
import { resolve as pathResolve, dirname, extname } from "node:path";

export async function resolve(specifier, context, defaultResolveFn) {
  // Eğer uzantı belli ise zinciri Node'a devret
  if (extname(specifier)) {
    return defaultResolveFn(specifier, context, defaultResolveFn);
  }

  let baseDir;
  if (context.parentURL) {
    baseDir = dirname(fileURLToPath(context.parentURL));
  } else {
    baseDir = process.cwd();
  }

  const tsPath = pathResolve(baseDir, specifier + ".ts");

  if (existsSync(tsPath)) {
    return { url: pathToFileURL(tsPath).href, shortCircuit: true };
  }

  // Bulamazsa zinciri Node’a bırak
  return defaultResolveFn(specifier, context, defaultResolveFn);
}
