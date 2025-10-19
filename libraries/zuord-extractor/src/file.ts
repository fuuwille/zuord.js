// @zuord-scope
import { ModuleBundleType } from "./module";

export { default as FileBase } from "./file.tzs";

export enum FileName {
    TS = "ts",
    TZS = "tzs",
    TZU = "tzu",
    TZV = "tzv",
    ZSchema = "zschema",
    ZUtility = "zutility",
    ZVariant = "zvariant"
}

export enum FileExtension {
    TS = "ts",
    TZS = "tzs",
    TZU = "tzu",
    TZV = "tzv",
    ZSchema = "zschema.ts",    
    ZUtility = "zutils.ts",
    ZVariant = "zvariant.ts"
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
    Schema = "schema",
    Variant = "variant"
}

export type FileCompiledTextOptions = Record<"ts" | "tzs" | "tzu" | "tzv", boolean>;

//

export const getType = (mode : FileExtension) : FileType | undefined => {
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
            return undefined;
    }
}

export const getExtension = (type: FileType, setType: ModuleBundleType) : FileExtension | undefined => {
    switch(type) {
        case FileType.Schema:
            return setType == ModuleBundleType.Main ? FileExtension.TS : FileExtension.TZS;
        case FileType.Variant:
            return setType == ModuleBundleType.Main ? FileExtension.TZU : FileExtension.TZV;
        default:
            return undefined;
    }
}

export const getName = (extension: FileExtension) : FileName => {
    switch(extension) {
        case FileExtension.TS:
            return FileName.TS;
        case FileExtension.TZS:
            return FileName.TZS;
        case FileExtension.TZU:
            return FileName.TZU;
        case FileExtension.TZV:
            return FileName.TZV;
        case FileExtension.ZSchema:
            return FileName.ZSchema;
        case FileExtension.ZUtility:
            return FileName.ZUtility;
        case FileExtension.ZVariant:
            return FileName.ZVariant;
    }
}