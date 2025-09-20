import { ModuleModelFile } from "./moduleFile.model";

export type Module = {
    modelFile: ModuleModelFile;
}

export enum ModuleType {
    Model = "model",
    Variants = "variants"
}