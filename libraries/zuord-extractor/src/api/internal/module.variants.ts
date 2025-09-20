import { Module } from "./module.model";
import { extractModuleModelFile } from "./moduleFile.variants";

export const extractModule = (dir: string, name: string): Module => {
    const modelFile = extractModuleModelFile(dir, name);

    return {
        modelFile
    };
};