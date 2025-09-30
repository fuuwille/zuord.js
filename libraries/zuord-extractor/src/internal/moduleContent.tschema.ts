import { Module } from "./module.tschema";
import { ModuleDefinitionLikeMember, ModuleFunctionalMember, ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";

export interface ModuleContent {
    module: Module;
    member: ModuleDefinitionLikeMember;
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

//

export interface ModuleFunctionalVariantContent extends ModuleVariantContent {
    member: ModuleFunctionalMember;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}