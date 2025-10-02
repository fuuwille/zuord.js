import { SourceFile } from "ts-morph";
import { Module } from "./module.tschema";
import { ModuleMode } from "./module.tschema";
import { ModuleFile, moduleFile } from "./moduleFile";
import { moduleContent } from "./moduleContent";
import { moduleMember } from "./moduleMember";
import { moduleDiagnostic } from "./moduleDiagnostic";

export const updateModule = (module: Module): void => {
    const schemaMembers = module.schemaFile?.members;
    const variantMembers = module.variantsFile?.members;

    module.schemaContents = [];
    module.variantContents = [];

    if(schemaMembers) {
        for(const member of schemaMembers.filter(moduleMember.isSchemaLike)) {
            const schemaContent = moduleContent.createSchemaContent(module, member);
            moduleContent.updateContentName(schemaContent);

            module.schemaContents.push(schemaContent);
        }
    }

    if(variantMembers) {
        for(const member of variantMembers.filter(moduleMember.isVariantLike)) {
            const variantContent = moduleContent.createVariantContent(module, member);
            moduleContent.updateContentName(variantContent);

            module.variantContents.push(variantContent);
        }
    }

    if(module.variantContents.length > 0) {
        for(const variantContent of module.variantContents) {
            const schema = moduleContent.getVariantContentSchema(variantContent, module.schemaContents);

            if(schema) {
                variantContent.schema = schema;

                schema.variants ??= [];
                schema.variants.push(variantContent);
            }

            if(moduleContent.isFunctionalContent(variantContent)) {
                const member = moduleMember.getFunctionLike(variantContent.member);

                const returnNode = member?.returnTypeNode;

                if(!returnNode) {
                    variantContent.diagnostics ??= [];
                    variantContent.diagnostics.push(
                        moduleDiagnostic.buildInDiagnostics.noReturnType(variantContent.member.nameNode!)
                    );
                }
            }
        }
    }
};

export const extractModule = (dir: string, name: string): Module => {
    const module: Module = {
        name,
        schemaFile: moduleFile.extractFileAtPath<ModuleFile.SchemaFile>(dir, name, ModuleMode.Schema) ?? null,
        variantsFile: moduleFile.extractFileAtPath<ModuleFile.VariantsFile>(dir, name, ModuleMode.Variants) ?? null,
        schemaContents: [],
        variantContents: [],
    };

    updateModule(module);
    return module;
};

export const updateModuleTypeFile = (module: Module, sourceFile: SourceFile | null): void => {
    module.schemaFile = sourceFile ? moduleFile.extractSchemaFile(sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: Module, sourceFile: SourceFile | null): void => {
    module.variantsFile = sourceFile ? moduleFile.extractVariantsFile(sourceFile) : null;
    updateModule(module);
};