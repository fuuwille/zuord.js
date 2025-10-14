// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileExtension {
    TZM = "tzm",
    TZU = "tzu",
    TZS = "tzs",
    TZV = "tzv",
    TS = "ts",
    ZUtility = "zutility.ts",
    ZSchema = "zschema.ts",
    ZVariant = "zvariant.ts"
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
        case FileExtension.TZM:
        case FileExtension.TZS:
            return FileType.Schema;
        case FileExtension.TZU:
        case FileExtension.TZV:
            return FileType.Variants;
        default:
            return FileType.Unknown;
    }
}