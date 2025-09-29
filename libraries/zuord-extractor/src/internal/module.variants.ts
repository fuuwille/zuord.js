import { SourceFile } from "ts-morph";
import { Module } from "./module.type";
import { ModuleMode } from "./module.type";
import { extractModuleFileAtPath, extractModuleTypeFile, extractModuleVariantsFile } from "./moduleFile.variants";
import { createModuleTypeItem } from "./moduleItem.variants";
import { isModuleTypeLikeMember, isModuleVariantLikeMember } from "./moduleMember.variants";
import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";

export const initializeModule = (module: Module) => {
    if(!module.errors) {
        module.errors = [];
    }
    
    if(module.typeFile) {
        const variantMembers = module.variantsFile
            ?.members.filter(isModuleVariantLikeMember) 
            ?? [];

        const modelMembers = module.typeFile.members;

        module.types = [];

        for(const member of modelMembers.filter(isModuleTypeLikeMember)) {
            const modelItem = createModuleTypeItem(module, member);
            module.types.push(modelItem);

            /*const matchedVariants = variantMembers.filter(v => getTypeID(v.type) === member.id);

            for(const variantMember of matchedVariants) {
                const variantItem = createModuleVariantItem(modelItem, variantMember);
                modelItem.variants.push(variantItem);
            }*/
        }
    }
    else {
        module.errors!.push(`Model file not found`);
    }

    if(module.errors!.length == 0) {
        delete module.errors;
    }
};

export const extractModule = (dir: string, name: string): Module => {
    const module: Module = {
        name,
        typeFile: extractModuleFileAtPath<ModuleTypeFile>(dir, name, ModuleMode.Type) ?? null,
        variantsFile: extractModuleFileAtPath<ModuleVariantsFile>(dir, name, ModuleMode.Variants) ?? null,
        types: [],
        variants: [],
        errors: []
    };

    initializeModule(module);
    return module;
};

export const updateModuleTypeFile = (module: Module, sourceFile: SourceFile | null) => {
    module.typeFile = sourceFile ? extractModuleTypeFile(sourceFile) : null;
    initializeModule(module);
};

export const updateModuleVariantsFile = (module: Module, sourceFile: SourceFile | null) => {
    module.variantsFile = sourceFile ? extractModuleVariantsFile(sourceFile) : null;
    initializeModule(module);
};