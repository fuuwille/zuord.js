import { ModuleModelFile, ModuleVariantsFile } from "./moduleFile.model";
import { ModuleTypeItem } from "./moduleItem.model";

export type Module = {
    modelFile: ModuleModelFile | null;
    variantsFile: ModuleVariantsFile | null;
    models: ModuleTypeItem[];
    errors?: string[];
}

export enum ModuleMode {
    Model = "model",
    Variants = "variants"
}