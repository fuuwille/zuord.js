import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";
import { ModuleTypeItem, ModuleVariantItem } from "./moduleContent.type";

export type Module = {
    name: string;
    typeFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    types: ModuleTypeItem[];
    variants: ModuleVariantItem[];
    errors?: string[];
}

export enum ModuleMode {
    Type = "type",
    Variants = "variants"
}