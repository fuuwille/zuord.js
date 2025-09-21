import { Module } from "./module.model";
import { ModuleMode } from "./module.model";
import { extractModuleFileIfExists } from "./moduleFile.variants";

export const extractModule = (dir: string, name: string): Module => {
    const module = {
        modelFile: extractModuleFileIfExists(dir, name, ModuleMode.Model) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleMode.Variants) ?? null,
        errors: []
    } as Module;

    if(module.errors!.length == 0) {
        delete module.errors;
    }

    return module;
};