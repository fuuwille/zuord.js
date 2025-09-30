import { Module } from "./module.tschema";
import { ModuleMember, ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";

export interface ModuleContent {
    module: Module;
    member: ModuleMember;
    kind: ModuleContentKind;
    name?: string | null;
}

export interface ModuleSchemaContent extends ModuleContent {
    member: ModuleSchemaMember;
    kind: ModuleContentKind.Schema;
    variants?: ModuleVariantContent[];
}

export interface ModuleVariantContent extends ModuleContent {
    schema?: ModuleSchemaContent;
    kind: ModuleContentKind.Variant;
    member: ModuleVariantMember;
}

export enum ModuleContentKind {
    Schema = "schema",
    Variant = "variant"
}