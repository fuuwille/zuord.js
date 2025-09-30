import { SourceFile } from "ts-morph";
import { Module } from "./module.tschema";
import { ModuleMode } from "./module.tschema";
import { extractModuleFileAtPath, extractModuleSchemaFile, extractModuleVariantsFile } from "./moduleFile.variants";
import { createModuleSchemaContent, createModuleVariantContent, updateModuleContentName } from "./moduleContent.variants";
import { isModuleFunctionMember, isModuleSchemaMember, isModuleVariantMember, updateModuleDefinitionLikeMemberNameNode } from "./moduleMember.variants";
import { ModuleSchemaFile, ModuleVariantsFile } from "./moduleFile.tschema";

export const updateModule = (module: Module) => {
    const schemaMembers = module.schemaFile?.members;
    const variantMembers = module.variantsFile?.members;

    module.schemaContents = [];
    module.variantContents = [];

    if(schemaMembers) {
        for(const member of schemaMembers.filter(isModuleSchemaMember)) {
            const schemaContent = createModuleSchemaContent(module, member);
            module.schemaContents.push(schemaContent);
        }
    }

    if(variantMembers) {
        for(const member of variantMembers.filter(isModuleVariantMember)) {
            const variantContent = createModuleVariantContent(module, member);
            module.variantContents.push(variantContent);
        }
    }

    if(module.variantContents.length > 0) {
        for(const variantContent of module.variantContents) {
            updateModuleContentName(variantContent);
        }
    }

    if(module.schemaContents.length > 0) {
        for(const schemaContent of module.schemaContents) {
            updateModuleContentName(schemaContent);
        }
    }
};

export const extractModule = (dir: string, name: string): Module => {
    const module: Module = {
        name,
        schemaFile: extractModuleFileAtPath<ModuleSchemaFile>(dir, name, ModuleMode.Schema) ?? null,
        variantsFile: extractModuleFileAtPath<ModuleVariantsFile>(dir, name, ModuleMode.Variants) ?? null,
        schemaContents: [],
        variantContents: [],
    };

    updateModule(module);
    return module;
};

export const updateModuleTypeFile = (module: Module, sourceFile: SourceFile | null) => {
    module.schemaFile = sourceFile ? extractModuleSchemaFile(sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: Module, sourceFile: SourceFile | null) => {
    module.variantsFile = sourceFile ? extractModuleVariantsFile(sourceFile) : null;
    updateModule(module);
};