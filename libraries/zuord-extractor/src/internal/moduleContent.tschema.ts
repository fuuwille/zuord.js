import { Module } from "./module.tschema";
import { ModuleMember, ModuleSchemaLikeMember, ModuleVariantLikeMember } from "./moduleMember.tschema";

export interface ModuleContent {
    module: Module;
    member: ModuleMember;
    name?: string;
}

export interface ModuleSchemaContent extends ModuleContent {
    member: ModuleSchemaLikeMember;
    variants?: ModuleVariantContent[];
}

export interface ModuleVariantContent extends ModuleContent {
    schema?: ModuleSchemaContent;
    member: ModuleVariantLikeMember;
}