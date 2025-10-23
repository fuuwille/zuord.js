// @zuord-scope
import { ModuleBundleType } from "./module";

export { default as FileBase } from "./file.tzs";

export enum FileName {
    Main = "main",
    Schema = "schema",
    Utility = "utility",
    Variant = "variant"
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

export enum FileSourceExtension {
    TS = FileExtension.TS,
    TZS = FileExtension.TZS,
    TZU = FileExtension.TZU,
    TZV = FileExtension.TZV
}

export enum FileCompiledExtension {
    TS = FileExtension.TS,
    TZS = FileExtension.ZSchema,
    TZU = FileExtension.ZUtility,
    TZV = FileExtension.ZVariant
}


export type FileSchemaLikeExtension =
    | FileExtension.TS
    | FileExtension.TZS
    | FileExtension.ZSchema

export type FileVariantLikeExtension = 
    | FileExtension.TZU
    | FileExtension.TZV
    | FileExtension.ZUtility
    | FileExtension.ZVariant

export enum FileType {
    Schema = "schema",
    Variant = "variant"
}

export type FileCompiledTextOptions = {
    exists: FileCompiledTextExists;
};

export type FileCompiledTextExists = Record<FileName, boolean>;