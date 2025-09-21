import { Module } from "./module.model";
import { ModuleMember, ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export interface ModuleItem {
    member: ModuleMember
}

export interface ModuleModelItem extends ModuleItem {
    module: Module;
    member: ModuleModelMember;
    variants: ModuleVariantItem[];
}

export interface ModuleVariantItem extends ModuleItem {
    model: ModuleModelItem;
    member: ModuleVariantMember;
}