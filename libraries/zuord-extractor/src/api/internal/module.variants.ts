import { Module } from "./module.model";
import { ModuleMode } from "./module.model";
import { extractModuleFileIfExists } from "./moduleFile.variants";
import { createModuleModelItem } from "./moduleItem.variants";
import { isModuleModelNode } from "./moduleNode.variants";

export const extractModule = (dir: string, name: string): Module => {
    const module = {
        modelFile: extractModuleFileIfExists(dir, name, ModuleMode.Model) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleMode.Variants) ?? null,
        models: [],
        errors: []
    } as Module;

    if(module.modelFile) {
        const members = module.modelFile.members;

        for(const member of members) {
            if(isModuleModelNode(member.node)) {
                const modelItem = createModuleModelItem(module, member);
                module.models.push(modelItem);
            }
        }
    }
    else {
        module.errors!.push(`Model file not found`);
    }

    if(module.errors!.length == 0) {
        delete module.errors;
    }

    return module;
};