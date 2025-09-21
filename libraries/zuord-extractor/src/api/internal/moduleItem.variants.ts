import { Module } from "./module.model";
import { ModuleModelItem, ModuleVariantItem } from "./moduleItem.model";
import { ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export const createModuleModelItem = (
    module: Module, member: ModuleModelMember
) : ModuleModelItem => {

    return {
        module,
        member,
        variants: [],
    };
};

export const createModuleVariantItem = (
    model: ModuleModelItem, member: ModuleVariantMember
) : ModuleVariantItem => {

    return {
        member,
        model
    };
};