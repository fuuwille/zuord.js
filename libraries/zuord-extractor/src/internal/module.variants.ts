import { Module } from "./module.type";
import { ModuleMode } from "./module.type";
import { extractModuleFileIfExists } from "./moduleFile.variants";
import { createModuleTypeItem, createModuleVariantItem } from "./moduleItem.variants";
import { isModuleTypeLikeMember } from "./moduleMember.variants";
import { isModuleVariantLikeNode } from "./moduleNode.variants";
import { getTypeID } from "./~typeID.variants";

export const initializeModule = (module: Module): Module => {
    if(module.typeFile) {
        const variantMembers = module.variantsFile
            ?.members.filter(m => isModuleVariantLikeNode(m.node)) 
            ?? [];

        const modelMembers = module.typeFile.members;

        for(const member of modelMembers.filter(isModuleTypeLikeMember)) {
            const modelItem = createModuleTypeItem(module, member);
            module.types.push(modelItem);

            const matchedVariants = variantMembers.filter(v => getTypeID(v.type) === member.id);

            for(const variantMember of matchedVariants) {
                const variantItem = createModuleVariantItem(modelItem, variantMember);
                modelItem.variants.push(variantItem);
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

export const extractModule = (dir: string, name: string): Module => {
    return initializeModule({
        name,
        typeFile: extractModuleFileIfExists(dir, name, ModuleMode.Type) ?? null,
        variantsFile: extractModuleFileIfExists(dir, name, ModuleMode.Variants) ?? null,
        types: [],
        errors: []
    } as Module);
};