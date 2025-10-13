// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileExtension {
    TS = "ts",
    TV = "tv",
    TZS = "tzs",
    TZV = "tzv"
}

export enum FileType {
    Unknown = "unknown",
    Schema = "schema",
    Variants = "variants"
}

export { File as FileSpec, file as fileSpec };

//

export const getType = (mode : FileExtension) : FileType => {
    switch(mode) {
        case FileExtension.TS:
        case FileExtension.TZS:
            return FileType.Schema;
        case FileExtension.TV:
        case FileExtension.TZV:
            return FileType.Variants;
        default:
            return FileType.Unknown;
    }
}