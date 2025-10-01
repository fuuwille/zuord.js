import { SchemaFile, VariantsFile } from "./moduleFile.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";

export type Module = {
    name: string;
    schemaFile: SchemaFile | null;
    variantsFile: VariantsFile | null;
    schemaContents: ModuleSchemaContent[];
    variantContents: ModuleVariantContent[];
}

export enum ModuleMode {
    Schema = "tschema",
    Variants = "variants"
}