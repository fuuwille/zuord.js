import { Module } from "./module.tschema";
import { ModuleTypeContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

export const initializeModuleTypeContent = (
    module: Module, member: ModuleTypeLikeMember
) : ModuleTypeContent => {

    return {
        module,
        member
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

export const completeModuleTypeContent = (
    module: Module, member: ModuleTypeLikeMember
) : ModuleTypeContent => {

    const variants: ModuleVariantContent[] = [];

    return {
        module,
        member,
        variants
    };
};
