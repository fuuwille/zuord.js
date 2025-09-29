import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.tschema";
import { ModuleTypeContent, ModuleVariantContent } from "./moduleContent.tschema";

export type Module = {
    name: string;
    schemaFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    schemaContents: ModuleTypeContent[];
    variantContents: ModuleVariantContent[];
}

export enum ModuleMode {
    Schema = "schema",
    Variants = "variants"
}