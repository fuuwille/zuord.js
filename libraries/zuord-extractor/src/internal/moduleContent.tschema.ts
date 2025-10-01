import { Module } from "./module.tschema";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { DefinitionLikeMember, FunctionalMember, SchemaMember, VariantMember } from "./moduleMember.tschema";

export interface BaseContent {
    module: Module;
    member: DefinitionLikeMember;
    kind: ContentKind;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface SchemaContent extends BaseContent {
    member: SchemaMember;
    kind: ContentKind.Schema;
    variants?: VariantContent[];
}

export interface VariantContent extends BaseContent {
    schema?: SchemaContent;
    kind: ContentKind.Variant;
    member: VariantMember;
}

export enum ContentKind {
    Schema = "schema",
    Variant = "variant"
}

//

export interface FunctionalContent extends VariantContent {
    member: FunctionalMember;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}