import { Module } from "./module.model";
import { ModuleMode } from "./module.model";
import { extractModuleFileIfExists } from "./moduleFile.variants";
import { createModuleTypeItem, createModuleVariantItem } from "./moduleItem.variants";
import { isModuleTypeLikeNode, isModuleVariantLikeNode } from "./moduleNode.variants";

export const extractModule = (dir: string, name: string): Module => {
    const module = {
        modelFile: extractModuleFileIfExists(dir, name, ModuleMode.Model) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleMode.Variants) ?? null,
        types: [],
        errors: []
    } as Module;

    if(module.modelFile) {

        const variantMembers = module.variantsFile
            ?.members.filter(m => isModuleVariantLikeNode(m.node)) 
            ?? [];

        const modelMembers = module.modelFile.members;


        for(const member of modelMembers) {
            if(isModuleTypeLikeNode(member.node)) {
                const modelItem = createModuleTypeItem(module, member);
                module.types.push(modelItem);

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