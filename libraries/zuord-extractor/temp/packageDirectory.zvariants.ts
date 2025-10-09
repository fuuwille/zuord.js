import * as ZSchema from "./packageDirectory.zschema";
import { Package } from "./package.zschema";
import { PackageDirectory } from "./packageDirectory.zschema";

export const initializeDirectory = (parent : Package | PackageDirectory, name : string) : ZSchema.PackageDirectory => {
    if("path" in parent) {
        return {
            package: parent,
            parent: null,
            name,
            directories: [],
            modules: []
        };
    } else {
        return {
            package: parent.package,
            parent,
            name,
            directories: [],
            modules: []
        };
    }
}

export const extractDirectory = (parent : Package | PackageDirectory, name : string) : ZSchema.PackageDirectory => {
    const directory = initializeDirectory(parent, name);

    

    return directory;
}