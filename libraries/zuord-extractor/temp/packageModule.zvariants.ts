import * as ZSchema from "./packageModule.zschema";
import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module";
import { ModuleFile, moduleFile } from "./moduleFile";
import { moduleContent } from "./moduleContent";
import { moduleMember } from "./moduleMember";
import { moduleDiagnostic } from "./moduleDiagnostic";

export const updateModule = (module: ZSchema.Module): void => {
    const schemaMembers = module.schemaFile?.members;
    const variantMembers = module.variantsFile?.members;

    module.schemaContents = [];
    module.variantContents = [];

    if(schemaMembers) {
        for(const member of schemaMembers.filter(moduleMember.isSchemaLike)) {
            const schemaContent = moduleContent.createSchema(module, member);
            moduleContent.updateName(schemaContent);

            module.schemaContents.push(schemaContent);
        }
    }

    if(variantMembers) {
        for(const member of variantMembers.filter(moduleMember.isVariantLike)) {
            const variantContent = moduleContent.createVariant(module, member);
            moduleContent.updateName(variantContent);

            module.variantContents.push(variantContent);
        }
    }

    if(module.variantContents.length > 0) {
        for(const variantContent of module.variantContents) {
            const schema = moduleContent.getVariantSchema(variantContent, module.schemaContents);

            if(schema) {
                variantContent.schema = schema;

                schema.variants ??= [];
                schema.variants.push(variantContent);
            }

            if(moduleContent.isFunctionalVariant(variantContent)) {
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

export const extractModule = (dir: string, name: string): ZSchema.Module => {
    const module: ZSchema.Module = {
        name,
        schemaFile: moduleFile.extractAtPath<ModuleFile.Schema>(dir, name, ModuleMode.Type) ?? null,
        variantsFile: moduleFile.extractAtPath<ModuleFile.Variants>(dir, name, ModuleMode.Variants) ?? null,
        schemaContents: [],
        variantContents: [],
    };

    updateModule(module);
    return module;
};

export const updateModuleTypeFile = (module: ZSchema.Module, sourceFile: SourceFile | null): void => {
    module.schemaFile = sourceFile ? moduleFile.extractSchema(sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: ZSchema.Module, sourceFile: SourceFile | null): void => {
    module.variantsFile = sourceFile ? moduleFile.extractVariants(sourceFile) : null;
    updateModule(module);
};
