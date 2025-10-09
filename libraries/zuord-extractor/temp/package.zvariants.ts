import path from "path";
import * as ZSchema from "./package.zschema";
import { extractDirectory } from "./packageDirectory.zvariants";

export const extractPackage = ($path: string) : ZSchema.Package => {
    const _package: ZSchema.Package = {
        path: path.resolve($path),
        root: null
    };

    _package.root = extractDirectory(_package, ".");

    return _package;
}