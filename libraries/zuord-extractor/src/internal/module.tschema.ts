import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";

export type Module = {
    name: string;
    schemaFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    schemaContents: ModuleSchemaContent[];
    variantContents: ModuleVariantContent[];
}

export enum ModuleMode {
    Schema = "schema",
    Variants = "variants"
}