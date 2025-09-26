import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";
import { ModuleTypeItem } from "./moduleItem.type";

export type Module = {
    typeFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    types: ModuleTypeItem[];
    errors?: string[];
}

export enum ModuleMode {
    Type = "type",
    Variants = "variants"
}