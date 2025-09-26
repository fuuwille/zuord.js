import { Module } from "./module.model";
import { ModuleTypeItem, ModuleVariantItem } from "./moduleItem.model";
import { ModuleTypeMember, ModuleVariantMember } from "./moduleMember.model";

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