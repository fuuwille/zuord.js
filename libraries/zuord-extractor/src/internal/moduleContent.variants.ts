import { Module } from "./module.type";
import { ModuleTypeItem, ModuleVariantItem } from "./moduleContent.type";
import { ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

export const createModuleTypeItem = (
    module: Module, member: ModuleTypeLikeMember
) : ModuleTypeItem => {

    return {
        module,
        member,
        variants: [],
    };
};

export const createModuleVariantItem = (
    model: ModuleTypeItem, member: ModuleVariantLikeMember
) : ModuleVariantItem => {

    return {
        member,
        model
    };
};