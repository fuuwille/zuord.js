import { Module } from "./module.model";
import { ModuleFileKind } from "./moduleFile.model";
import { extractModuleFileIfExists } from "./moduleFile.variants";

export const extractModule = (dir: string, name: string): Module => {
    const module = {
        modelFile: extractModuleFileIfExists(dir, name, ModuleFileKind.Model) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleFileKind.Variants) ?? null
    } as Module;

    return module;
};