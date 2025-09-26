import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.model";
import { ModuleTypeItem } from "./moduleItem.model";

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