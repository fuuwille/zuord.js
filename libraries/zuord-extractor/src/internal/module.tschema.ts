import { ModuleFile } from "./moduleFile";
import { ModuleContent } from "./moduleContent";

export type Module = {
    name: string;
    schemaFile: ModuleFile.SchemaFile | null;
    variantsFile: ModuleFile.VariantsFile | null;
    schemaContents: ModuleContent.SchemaContent[];
    variantContents: ModuleContent.VariantContent[];
}

export enum ModuleMode {
    Schema = "tschema",
    Variants = "tvariants"
}