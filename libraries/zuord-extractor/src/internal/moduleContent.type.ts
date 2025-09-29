import { Module } from "./module.type";
import { ModuleMember, ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.type";

export interface ModuleContent {
    module: Module;
    member: ModuleMember;
    name?: string;
}

export interface ModuleTypeContent extends ModuleContent {
    member: ModuleTypeLikeMember;
    variants?: ModuleVariantContent[];
}

export interface ModuleVariantContent extends ModuleContent {
    type?: ModuleTypeContent;
    member: ModuleVariantLikeMember;
}