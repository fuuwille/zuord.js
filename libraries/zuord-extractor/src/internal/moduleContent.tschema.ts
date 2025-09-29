import { Module } from "./module.tschema";
import { ModuleMember, ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";

export interface ModuleContent {
    module: Module;
    member: ModuleMember;
    name?: string;
}

export interface ModuleSchemaContent extends ModuleContent {
    member: ModuleSchemaMember;
    variants?: ModuleVariantContent[];
}

export interface ModuleVariantContent extends ModuleContent {
    schema?: ModuleSchemaContent;
    member: ModuleVariantMember;
}