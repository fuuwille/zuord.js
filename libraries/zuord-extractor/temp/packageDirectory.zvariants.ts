import * as ZSchema from "./packageDirectory.zschema";
import { Package } from "./package.zschema";
import { PackageDirectory } from "./packageDirectory.zschema";
import path from "path";
import { getFolders, getModules } from "./~package";
import { extractModule } from "./packageModule.zvariants";

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

    const dirPath = getDirectoryPath(directory);

    getModules(dirPath).forEach(module => {
        directory.modules.push(extractModule(directory, path.basename(module)));
    });

    getFolders(dirPath).forEach(folder => {
        directory.directories.push(extractDirectory(directory, path.basename(folder)));
    });

    return directory;
}

export const getDirectoryPath = (directory: PackageDirectory): string => {
    const parts: string[] = [];

    let current: PackageDirectory | null = directory;
    while (current) {
        if(current.name === ".") {
            break;
        }

        parts.unshift(current.name);
        current = current.parent;
    }

    return path.resolve(directory.package.path, ...parts);
};

export const getCompiledDirectoryPath = (directory: PackageDirectory): string => {
    const parts: string[] = [];

    let current: PackageDirectory | null = directory;
    while (current) {
        if(current.name === ".") {
            break;
        }

        parts.unshift(current.name);
        current = current.parent;
    }

    return path.resolve(directory.package.path, "~zuord", ...parts);
};