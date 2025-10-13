// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileExtension {
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

export const getBehavior = (mode : FileExtension) : FileBehavior => {
    switch(mode) {
        case FileExtension.TS:
        case FileExtension.TZS:
            return FileBehavior.Schema;
        case FileExtension.TV:
        case FileExtension.TZV:
            return FileBehavior.Variants;
        default:
            return FileBehavior.Unknown;
    }
}