import { Module } from "./module.type";
import { ModuleMember, ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

export interface ModuleContent {
    member: ModuleMember
}

export interface ModuleTypeContent extends ModuleContent {
    module: Module;
    member: ModuleTypeLikeMember;
    variants: ModuleVariantContent[];
}

export interface ModuleVariantContent extends ModuleContent {
    type: ModuleTypeContent;
    member: ModuleVariantLikeMember;
}