import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";
import { ModuleTypeContent, ModuleVariantContent } from "./moduleContent.type";

export type Module = {
    name: string;
    typeFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    types: ModuleTypeContent[];
    variants: ModuleVariantContent[];
    errors?: string[];
}

export enum ModuleMode {
    Type = "type",
    Variants = "variants"
}