import { SourceFile } from "ts-morph";
import { Module } from "./module.type";
import { ModuleMode } from "./module.type";
import { extractModuleFileAtPath, extractModuleTypeFile, extractModuleVariantsFile } from "./moduleFile.variants";
import { initializeModuleTypeContent, initializeModuleVariantContent } from "./moduleContent.variants";
import { isModuleTypeLikeMember, isModuleVariantLikeMember } from "./moduleMember.variants";
import { ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";
import { getTypeNodeName } from "./~type.variants";

export const updateModule = (module: Module) => {
    const typeMembers = module.typeFile?.members;
    const variantMembers = module.variantsFile?.members;

    module.typeContents = [];
    module.variantContents = [];

    if(typeMembers) {
        for(const member of typeMembers.filter(isModuleTypeLikeMember)) {
            const modelItem = initializeModuleTypeContent(module, member);
            module.typeContents.push(modelItem);
        }
    }

    if(variantMembers) {
        for(const member of variantMembers.filter(isModuleVariantLikeMember)) {
            const modelItem = initializeModuleVariantContent(module, member);
            module.variantContents.push(modelItem);
        }
    }

    if(module.typeContents.length > 0) {
        for(const typeContent of module.typeContents) {
            const member = typeContent.member;
            const name = getTypeNodeName(member.ref.typeNode);

            typeContent.name = name;
        }
    }
};

export const extractModule = (dir: string, name: string): Module => {
    const module: Module = {
        name,
        typeFile: extractModuleFileAtPath<ModuleTypeFile>(dir, name, ModuleMode.Type) ?? null,
        variantsFile: extractModuleFileAtPath<ModuleVariantsFile>(dir, name, ModuleMode.Variants) ?? null,
        typeContents: [],
        variantContents: [],
    };

    updateModule(module);
    return module;
};

export const updateModuleTypeFile = (module: Module, sourceFile: SourceFile | null) => {
    module.typeFile = sourceFile ? extractModuleTypeFile(sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: Module, sourceFile: SourceFile | null) => {
    module.variantsFile = sourceFile ? extractModuleVariantsFile(sourceFile) : null;
    updateModule(module);
};