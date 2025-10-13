// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileType {
    TS = "ts",
    TV = "tv",
    TZS = "tzs",
    TZV = "tzv"
}

export enum FileBehavior {
    Unknown = "unknown",
    Schema = "schema",
    Variants = "variants"
}

export { File as FileSpec, file as fileSpec };

//

export const getBehavior = (mode : FileType) : FileBehavior => {
    switch(mode) {
        case FileType.TS:
        case FileType.TZS:
            return FileBehavior.Schema;
        case FileType.TV:
        case FileType.TZV:
            return FileBehavior.Variants;
        default:
            return FileBehavior.Unknown;
    }
}