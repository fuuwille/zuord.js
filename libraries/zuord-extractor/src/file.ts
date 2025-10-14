// @zuord-scope

export { default as FileBase } from "./file.tzs";

export enum FileExtension {
    TS = "ts",
    TZS = "tzs",
    TZU = "tzu",
    TZV = "tzv",
    ZSchema =   "zschema.ts",    
    ZUtility =  "zutils.ts",
    ZVariant =  "zvariant.ts"
}

export enum FileType {
    Unknown = "unknown",
    Schema = "schema",
    Variant = "variant"
}

export { File as FileSpec, file as fileSpec };

//

export const getType = (mode : FileExtension) : FileType => {
    switch(mode) {
        case FileExtension.TS:
        case FileExtension.TZS:
        case FileExtension.ZSchema:
            return FileType.Schema;
        case FileExtension.TZU:
        case FileExtension.TZV:
        case FileExtension.ZUtility:
        case FileExtension.ZVariant:
            return FileType.Variant;
        default:
            return FileType.Unknown;
    }
}