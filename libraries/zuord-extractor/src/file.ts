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
    ZUtility = "zutility.ts",
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