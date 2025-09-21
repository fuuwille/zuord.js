import { ModuleModelFile, ModuleVariantsFile } from "./moduleFile.model";

export type Module = {
    modelFile: ModuleModelFile | null;
    variantsFile: ModuleVariantsFile | null;
}

export enum ModuleMode {
    Model = "model",
    Variants = "variants"
}