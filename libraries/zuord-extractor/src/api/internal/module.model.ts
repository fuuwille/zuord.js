import { ModuleModelFile, ModuleVariantsFile } from "./moduleFile.model";
import { ModuleModelItem } from "./moduleItem.model";

export type Module = {
    modelFile: ModuleModelFile | null;
    variantsFile: ModuleVariantsFile | null;
    models: ModuleModelItem[];
    errors?: string[];
}

export enum ModuleMode {
    Model = "model",
    Variants = "variants"
}