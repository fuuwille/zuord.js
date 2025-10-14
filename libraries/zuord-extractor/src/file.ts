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

export type FileSchemaExtension =
    | FileExtension.TS
    | FileExtension.TZS
    | FileExtension.ZSchema

export type FileVariantExtension = 
    | FileExtension.TZU
    | FileExtension.TZV
    | FileExtension.ZUtility
    | FileExtension.ZVariant

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