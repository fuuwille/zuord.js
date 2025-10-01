import { SourceFile } from "ts-morph";
import { Module } from "./module.tschema";
import { ModuleMode } from "./module.tschema";
import { ModuleFile, moduleFile } from "./moduleFile";
import { createModuleSchemaContent, createModuleVariantContent, getModuleVariantContentSchema, isModuleFunctionalContent, updateModuleContentName } from "./moduleContent.variants";
import { getModuleFunctionLikeMember, isModuleSchemaMember, isModuleVariantMember } from "./moduleMember.variants";
import { moduleDiagnostic } from "./moduleDiagnostic";

export const updateModule = (module: Module): void => {
    const schemaMembers = module.schemaFile?.members;
    const variantMembers = module.variantsFile?.members;

    module.schemaContents = [];
    module.variantContents = [];

    if(schemaMembers) {
        for(const member of schemaMembers.filter(isModuleSchemaMember)) {
            const schemaContent = createModuleSchemaContent(module, member);
            updateModuleContentName(schemaContent);

            module.schemaContents.push(schemaContent);
        }
    }

    if(variantMembers) {
        for(const member of variantMembers.filter(isModuleVariantMember)) {
            const variantContent = createModuleVariantContent(module, member);
            updateModuleContentName(variantContent);

            module.variantContents.push(variantContent);
        }
    }

    if(module.variantContents.length > 0) {
        for(const variantContent of module.variantContents) {
            const schema = getModuleVariantContentSchema(variantContent, module.schemaContents);

            if(schema) {
                variantContent.schema = schema;

                schema.variants ??= [];
                schema.variants.push(variantContent);
            }

            if(isModuleFunctionalContent(variantContent)) {
                const member = getModuleFunctionLikeMember(variantContent.member);

                const returnNode = member?.returnTypeNode;

                if(!returnNode) {
                    variantContent.diagnostics ??= [];
                    variantContent.diagnostics.push(
                        moduleDiagnostic.noReturnType(variantContent.member.nameNode!)
                    );
                }
            }
        }
    }
};

export const extractModule = (dir: string, name: string): Module => {
    const module: Module = {
        name,
        schemaFile: moduleFile.extractAtPath<ModuleFile.Schema>(dir, name, ModuleMode.Schema) ?? null,
        variantsFile: moduleFile.extractAtPath<ModuleFile.Variants>(dir, name, ModuleMode.Variants) ?? null,
        schemaContents: [],
        variantContents: [],
    };

    updateModule(module);
    return module;
};

export const updateModuleTypeFile = (module: Module, sourceFile: SourceFile | null): void => {
    module.schemaFile = sourceFile ? moduleFile.extractSchema(sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: Module, sourceFile: SourceFile | null): void => {
    module.variantsFile = sourceFile ? moduleFile.extractVariants(sourceFile) : null;
    updateModule(module);
};