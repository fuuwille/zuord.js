import { SourceFile } from "ts-morph";
import { Module } from "./module.tschema";
import { ModuleMode } from "./module.tschema";
import { extractModuleFileAtPath, extractModuleSchemaFile, extractModuleVariantsFile } from "./moduleFile.variants";
import { createModuleSchemaContent, createModuleVariantContent, getModuleVariantContentSchema, isModuleFunctionalContent, updateModuleContentName } from "./moduleContent.variants";
import { getModuleFunctionLikeMember, isModuleSchemaMember, isModuleVariantMember } from "./moduleMember.variants";
import { ModuleSchemaFile, ModuleVariantsFile } from "./moduleFile.tschema";
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
                        moduleDiagnostic.error(
                            variantContent.member.nameNode!,
                            "Functional member has no return type",
                        )
                    );
                }
            }
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

export const updateModuleTypeFile = (module: Module, sourceFile: SourceFile | null): void => {
    module.schemaFile = sourceFile ? extractModuleSchemaFile(sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: Module, sourceFile: SourceFile | null): void => {
    module.variantsFile = sourceFile ? extractModuleVariantsFile(sourceFile) : null;
    updateModule(module);
};