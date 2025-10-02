import { Module } from "./module.tschema";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { ModuleMember } from "./moduleMember";

export interface BaseContent {
    module: Module;
    member: ModuleMember.DefinitionLike;
    kind: ContentKind;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface SchemaContent extends BaseContent {
    member: ModuleMember.SchemaLike;
    kind: ContentKind.Schema;
    variants?: VariantContent[];
}

export interface VariantContent extends BaseContent {
    schema?: SchemaContent;
    kind: ContentKind.Variant;
    member: ModuleMember.VariantLike;
}

export enum ContentKind {
    Schema = "schema",
    Variant = "variant"
}

//

export interface ValueContent extends VariantContent {
    member: ModuleMember.VariableValue;
    declaredSchemaName?: string | null;
}

export interface FunctionalContent extends VariantContent {
    member: ModuleMember.Functional;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}