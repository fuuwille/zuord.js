import { Module } from "./module.type";
import { ModuleTypeContent, ModuleVariantContent } from "./moduleContent.type";
import { ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

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