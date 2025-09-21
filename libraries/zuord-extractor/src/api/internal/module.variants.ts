import { Module } from "./module.model";
import { ModuleMode } from "./module.model";
import { extractModuleFileIfExists } from "./moduleFile.variants";
import { createModuleModelItem, createModuleVariantItem } from "./moduleItem.variants";
import { isModuleModelNode, isModuleVariantNode } from "./moduleNode.variants";

export const extractModule = (dir: string, name: string): Module => {
    const module = {
        modelFile: extractModuleFileIfExists(dir, name, ModuleMode.Model) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleMode.Variants) ?? null,
        models: [],
        errors: []
    } as Module;

    if(module.modelFile) {

        const variantMembers = module.variantsFile
            ?.members.filter(m => isModuleVariantNode(m.node)) 
            ?? [];

        const modelMembers = module.modelFile.members;


        for(const member of modelMembers) {
            if(isModuleModelNode(member.node)) {
                const modelItem = createModuleModelItem(module, member);
                module.models.push(modelItem);

                const matchedVariants = variantMembers.filter(v => v.target === member.id);

                for(const variantMember of matchedVariants) {
                    const variantItem = createModuleVariantItem(modelItem, variantMember);
                    modelItem.variants.push(variantItem);
                }
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