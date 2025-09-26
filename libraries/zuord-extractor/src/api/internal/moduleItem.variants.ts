import { Module } from "./module.type";
import { ModuleTypeItem, ModuleVariantItem } from "./moduleItem.type";
import { ModuleTypeMember, ModuleVariantMember } from "./moduleMember.type";

export const createModuleTypeItem = (
    module: Module, member: ModuleTypeMember
) : ModuleTypeItem => {

    return {
        module,
        member,
        variants: [],
    };
};

export const createModuleVariantItem = (
    model: ModuleTypeItem, member: ModuleVariantMember
) : ModuleVariantItem => {

    return {
        member,
        model
    };
};