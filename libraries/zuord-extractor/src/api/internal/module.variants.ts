import { Module } from "./module.model";
import { ModuleMode } from "./module.model";
import { extractModuleFileIfExists } from "./moduleFile.variants";

export const extractModule = (dir: string, name: string): Module => {
    const module = {
        modelFile: extractModuleFileIfExists(dir, name, ModuleMode.Model) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleMode.Variants) ?? null
    } as Module;

    return module;
};