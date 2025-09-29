import { Module } from "./module.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleSchemaLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

export const initializeModuleTypeContent = (
    module: Module, member: ModuleSchemaLikeMember
) : ModuleSchemaContent => {

    return {
        module,
        member
    };
};

export const completeModuleSchemaContent = (
    module: Module, member: ModuleSchemaLikeMember
) : ModuleSchemaContent => {

    const variants: ModuleVariantContent[] = [];

    return {
        module,
        member,
        variants
    };
};

export const initializeModuleVariantContent = (
    module: Module, member: ModuleVariantLikeMember
) : ModuleVariantContent => {

    return {
        module,
        member
    };
};