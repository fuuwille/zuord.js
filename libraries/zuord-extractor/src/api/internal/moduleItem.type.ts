import { Module } from "./module.type";
import { ModuleMember, ModuleTypeMember, ModuleVariantMember } from "./moduleMember.type";

export interface ModuleItem {
    member: ModuleMember
}

export interface ModuleTypeItem extends ModuleItem {
    module: Module;
    member: ModuleTypeMember;
    variants: ModuleVariantItem[];
}

export interface ModuleVariantItem extends ModuleItem {
    model: ModuleTypeItem;
    member: ModuleVariantMember;
}