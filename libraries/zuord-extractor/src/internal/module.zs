import { ModuleFile } from "./moduleFile";
import { ModuleContent } from "./moduleContent";

export type Module = {
    name: string;
    schemaFile: ModuleFile.Schema | null;
    variantsFile: ModuleFile.Variants | null;
    schemaContents: ModuleContent.Schema[];
    variantContents: ModuleContent.Variant[];
}

export enum ModuleMode {
    Schema = "tschema",
    Variants = "tvariants"
}