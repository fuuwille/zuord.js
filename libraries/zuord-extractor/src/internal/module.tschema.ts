import { Schema, Variants } from "./moduleFile.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";

export type Module = {
    name: string;
    schemaFile: Schema | null;
    variantsFile: Variants | null;
    schemaContents: ModuleSchemaContent[];
    variantContents: ModuleVariantContent[];
}

export enum ModuleMode {
    Schema = "tschema",
    Variants = "variants"
}