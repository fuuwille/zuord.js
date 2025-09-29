import { Module } from "./module.type";
import { ModuleTypeContent, ModuleVariantContent } from "./moduleContent.type";
import { ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

export const createModuleTypeContent = (
    module: Module, member: ModuleTypeLikeMember
) : ModuleTypeContent => {

    return {
        module,
        member,
        variants: [],
    };
};

export const createModuleVariantContent = (
    module: Module, member: ModuleVariantLikeMember
) : ModuleVariantContent => {

    return {
        module,
        member
    };
};