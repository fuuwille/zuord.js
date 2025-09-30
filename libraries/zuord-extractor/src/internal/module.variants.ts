import { SourceFile } from "ts-morph";
import { Module } from "./module.tschema";
import { ModuleMode } from "./module.tschema";
import { extractModuleFileAtPath, extractModuleSchemaFile, extractModuleVariantsFile } from "./moduleFile.variants";
import { initializeModuleTypeContent, initializeModuleVariantContent } from "./moduleContent.variants";
import { isModuleSchemaMember, isModuleVariableMember, isModuleVariantMember } from "./moduleMember.variants";
import { ModuleSchemaFile, ModuleVariantsFile } from "./moduleFile.tschema";

export const updateModule = (module: Module) => {
    const schemaMembers = module.schemaFile?.members;
    const variantMembers = module.variantsFile?.members;

    module.schemaContents = [];
    module.variantContents = [];

    if(schemaMembers) {
        for(const member of schemaMembers.filter(isModuleSchemaMember)) {
            const schemaContent = initializeModuleTypeContent(module, member);
            module.schemaContents.push(schemaContent);
        }
    }

    if(variantMembers) {
        for(const member of variantMembers.filter(isModuleVariantMember)) {
            const variantContent = initializeModuleVariantContent(module, member);
            module.variantContents.push(variantContent);
        }
    }

    if(module.variantContents.length > 0) {
        for(const variantContent of module.variantContents) {
            const member = variantContent.member;
            
            var name;
            if(isModuleVariableMember(member)) {
                const initializer = member.initializer;
                name = initializer?.typeNode?.getText();
            }
            else {
                name = member.typeNode?.getText();
            }

            variantContent.name = name;
        }
    }

    if(module.schemaContents.length > 0) {
        for(const schemaContent of module.schemaContents) {
            const member = schemaContent.member;
            const name = member.nameNode?.getText();

            schemaContent.name = name;
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