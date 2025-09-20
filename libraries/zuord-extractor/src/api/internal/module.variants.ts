import { Module } from "./module.model";
import { extractModuleModelFile, extractModuleVariantsFile } from "./moduleFile.variants";

export const extractModule = (dir: string, name: string): Module => {
    const modelFile = extractModuleModelFile(dir, name);
    const variantsFile = extractModuleVariantsFile(dir, name);

    return {
        modelFile,
        variantsFile
    };
};