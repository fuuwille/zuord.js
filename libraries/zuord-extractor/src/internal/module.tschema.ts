import { SchemaFile, VariantsFile } from "./moduleFile.tschema";
import { ModuleContent } from "./moduleContent";

export type Module = {
    name: string;
    schemaFile: SchemaFile | null;
    variantsFile: VariantsFile | null;
    schemaContents: ModuleContent.SchemaContent[];
    variantContents: ModuleContent.VariantContent[];
}

export enum ModuleMode {
    Schema = "tschema",
    Variants = "variants"
}