// @zuord-scope
import { ModuleBundleType } from "./module";

export { default as FileBase } from "./file.tzs";

export enum FileName {
    TS = "ts",
    TZS = "tzs",
    TZU = "tzu",
    TZV = "tzv"
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

export type FileCompiledTextOptions = Record<FileName, boolean>;

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

export const getExtension = (type: FileType, bundle: ModuleBundleType) : FileExtension | undefined => {
    switch(type) {
        case FileType.Schema:
            return bundle == ModuleBundleType.Main ? FileExtension.TS : FileExtension.TZS;
        case FileType.Variant:
            return bundle == ModuleBundleType.Main ? FileExtension.TZU : FileExtension.TZV;
        default:
            return undefined;
    }
}

export const getName = (extension: FileExtension) : FileName => {
    switch(extension) {
        case FileExtension.TS:
            return FileName.TS;
        case FileExtension.TZS:
        case FileExtension.ZSchema:
            return FileName.TZS;
        case FileExtension.TZU:
        case FileExtension.ZUtility:
            return FileName.TZU;
        case FileExtension.TZV:
        case FileExtension.ZVariant:
            return FileName.TZV;
    }
}