import { Module } from "./module.type";
import { ModuleMember, ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

export interface ModuleItem {
    member: ModuleMember
}

export interface ModuleTypeItem extends ModuleItem {
    module: Module;
    member: ModuleTypeLikeMember;
    variants: ModuleVariantItem[];
}

export interface ModuleVariantItem extends ModuleItem {
    model: ModuleTypeItem;
    member: ModuleVariantLikeMember;
}