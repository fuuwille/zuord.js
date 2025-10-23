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
    TS = "ts",
    TZS = "tzs",
    TZU = "tzu",
    TZV = "tzv"
}

export enum FileCompiledExtension {
    TS = "ts",
    TZS = "zschema.ts",
    TZU = "zutility.ts",
    TZV = "zvariant.ts"
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