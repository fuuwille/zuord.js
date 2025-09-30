import { Module } from "./module.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";

export const createModuleTypeContent = (
    module: Module, member: ModuleSchemaMember
) : ModuleSchemaContent => {

    return {
        module,
        member
    };
};

export const createModuleVariantContent = (
    module: Module, member: ModuleVariantMember
) : ModuleVariantContent => {

    return {
        module,
        member
    };
};

export const initializeModuleSchemaContent = (
    module: Module, member: ModuleSchemaMember
) : ModuleSchemaContent => {

    const variants: ModuleVariantContent[] = [];

    return {
        module,
        member,
        variants
    };
};