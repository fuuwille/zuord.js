import * as ZSchema from "./packageModule.zschema";
import { SourceFile } from "ts-morph";
import { ModuleFileMode } from "./moduleFile";
import { ModuleFile, moduleFile } from "./moduleFile";
import { moduleContent } from "./moduleContent";
import { moduleMember } from "./moduleMember";
import { moduleDiagnostic } from "./moduleDiagnostic";
import { PackageDirectory } from "./packageDirectory.zschema";

export const updateModule = (module: ZSchema.PackageModule): void => {
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

export const extractModule = (directory: PackageDirectory, name: string): ZSchema.PackageModule => {
    const module: ZSchema.PackageModule = {
        name,
        directory,
        coreFile: null,
        schemaFile: null,
        variantsFile: null,
        schemaContents: [],
        variantContents: [],
    };

    module.coreFile = moduleFile.extractAtPath<ModuleFile.Core>(module, name, ModuleFileMode.Core) ?? null;
    module.schemaFile = moduleFile.extractAtPath<ModuleFile.Schema>(module, name, ModuleFileMode.Schema) ?? null;
    module.variantsFile = moduleFile.extractAtPath<ModuleFile.Variants>(module, name, ModuleFileMode.Variants) ?? null;

    updateModule(module);
    return module;
};

export const updateModuleTypeFile = (module: ZSchema.PackageModule, sourceFile: SourceFile | null): void => {
    module.schemaFile = sourceFile ? moduleFile.extractSchema(module, sourceFile) : null;
    updateModule(module);
};

export const updateModuleVariantsFile = (module: ZSchema.PackageModule, sourceFile: SourceFile | null): void => {
    module.variantsFile = sourceFile ? moduleFile.extractVariants(module, sourceFile) : null;
    updateModule(module);
};

//

export const compile = (module: ZSchema.PackageModule): void => {
    if(module.coreFile) {
        moduleFile.compile(module.coreFile);
    }

    if(module.schemaFile) {
        moduleFile.compile(module.schemaFile);
    }

    if(module.variantsFile) {
        moduleFile.compile(module.variantsFile);
    }
};