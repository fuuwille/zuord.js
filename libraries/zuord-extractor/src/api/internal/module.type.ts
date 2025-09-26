import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";
import { ModuleTypeItem } from "./moduleItem.type";

export type Module = {
    modelFile: ModuleTypeFile | null;
    variantsFile: ModuleVariantsFile | null;
    types: ModuleTypeItem[];
    errors?: string[];
}

export enum ModuleMode {
    Model = "model",
    Variants = "variants"
}