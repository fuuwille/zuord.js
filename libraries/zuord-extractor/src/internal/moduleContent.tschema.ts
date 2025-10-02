import { Module } from "./module.tschema";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { DefinitionLikeMember, FunctionalMember, SchemaLikeMember, VariableValueMember, VariantLikeMember } from "./moduleMember.tschema";

export interface BaseContent {
    module: Module;
    member: DefinitionLikeMember;
    kind: ContentKind;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface SchemaContent extends BaseContent {
    member: SchemaLikeMember;
    kind: ContentKind.Schema;
    variants?: VariantContent[];
}

export interface VariantContent extends BaseContent {
    schema?: SchemaContent;
    kind: ContentKind.Variant;
    member: VariantLikeMember;
}

export enum ContentKind {
    Schema = "schema",
    Variant = "variant"
}

//

export interface ValueContent extends VariantContent {
    member: VariableValueMember;
    declaredSchemaName?: string | null;
}

export interface FunctionalContent extends VariantContent {
    member: FunctionalMember;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}