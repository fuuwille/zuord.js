import { Module } from "./module.tschema";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { DefinitionLikeMember, FunctionalMember, SchemaMember, VariantMember } from "./moduleMember.tschema";

export interface ModuleContent {
    module: Module;
    member: DefinitionLikeMember;
    kind: ModuleContentKind;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface ModuleSchemaContent extends ModuleContent {
    member: SchemaMember;
    kind: ModuleContentKind.Schema;
    variants?: ModuleVariantContent[];
}

export interface ModuleVariantContent extends ModuleContent {
    schema?: ModuleSchemaContent;
    kind: ModuleContentKind.Variant;
    member: VariantMember;
}

export enum ModuleContentKind {
    Schema = "schema",
    Variant = "variant"
}

//

export interface ModuleFunctionalContent extends ModuleVariantContent {
    member: FunctionalMember;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}