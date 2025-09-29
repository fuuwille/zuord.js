import { Module } from "./module.tschema";
import { ModuleMember, ModuleTypeLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

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