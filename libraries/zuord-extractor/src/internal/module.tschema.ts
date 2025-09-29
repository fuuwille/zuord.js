import { ModuleSchemaFile, ModuleVariantsFile } from "./moduleFile.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";

export type Module = {
    name: string;
    schemaFile: ModuleSchemaFile | null;
    variantsFile: ModuleVariantsFile | null;
    schemaContents: ModuleSchemaContent[];
    variantContents: ModuleVariantContent[];
}

export enum ModuleMode {
    Schema = "schema",
    Variants = "variants"
}