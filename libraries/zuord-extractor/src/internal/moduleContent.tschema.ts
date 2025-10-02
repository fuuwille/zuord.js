import { Module } from "./module.tschema";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { DefinitionLike, Functional, SchemaLike, VariableValue, VariantLike } from "./moduleMember.tschema";

export interface BaseContent {
    module: Module;
    member: DefinitionLike;
    kind: ContentKind;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface SchemaContent extends BaseContent {
    member: SchemaLike;
    kind: ContentKind.Schema;
    variants?: VariantContent[];
}

export interface VariantContent extends BaseContent {
    schema?: SchemaContent;
    kind: ContentKind.Variant;
    member: VariantLike;
}

export enum ContentKind {
    Schema = "schema",
    Variant = "variant"
}

//

export interface ValueContent extends VariantContent {
    member: VariableValue;
    declaredSchemaName?: string | null;
}

export interface FunctionalContent extends VariantContent {
    member: Functional;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}