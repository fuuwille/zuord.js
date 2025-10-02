import { Module } from "./module.tschema";
import { ModuleContentKind } from "./moduleContentKind";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { ModuleMember } from "./moduleMember";

export interface BaseContent {
    module: Module;
    member: ModuleMember.DefinitionLike;
    kind: ModuleContentKind.Any;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface SchemaContent extends BaseContent {
    member: ModuleMember.SchemaLike;
    kind: ModuleContentKind.Schema;
    variants?: VariantContent[];
}

export interface VariantContent extends BaseContent {
    schema?: SchemaContent;
    kind: ModuleContentKind.Variant;
    member: ModuleMember.VariantLike;
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