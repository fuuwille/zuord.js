import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.tschema";
import { ModuleTypeContent, ModuleVariantContent } from "./moduleContent.tschema";

export type Module = {
    name: string;
    typeFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    typeContents: ModuleTypeContent[];
    variantContents: ModuleVariantContent[];
}

export enum ModuleMode {
    Type = "type",
    Variants = "variants"
}