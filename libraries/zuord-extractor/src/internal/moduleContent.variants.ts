import { Module } from "./module.tschema";
import { ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

export const initializeModuleTypeContent = (
    module: Module, member: ModuleTypeLikeMember
) : ModuleSchemaContent => {

    return {
        module,
        member
    };
};

export const completeModuleSchemaContent = (
    module: Module, member: ModuleTypeLikeMember
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