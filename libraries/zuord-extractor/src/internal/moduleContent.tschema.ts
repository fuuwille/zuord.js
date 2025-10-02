import { Module } from "./module.tschema";
import { ModuleContentKind } from "./moduleContentKind";
import { BaseDiagnostic } from "./moduleDiagnostic.tschema";
import { ModuleMember } from "./moduleMember";

export interface Common {
    module: Module;
    member: ModuleMember.DefinitionLike;
    kind: ModuleContentKind.Common;
    name?: string | null;
    diagnostics?: BaseDiagnostic[];
}

export interface Schema extends Common {
    member: ModuleMember.SchemaLike;
    kind: ModuleContentKind.Schema;
    variants?: Variant[];
}

export interface Variant extends Common {
    schema?: Schema;
    kind: ModuleContentKind.Variant;
    member: ModuleMember.VariantLike;
}

//

export interface ValueVariant extends Variant {
    member: ModuleMember.VariableValue;
    declaredSchemaName?: string | null;
}

export interface FunctionalVariant extends Variant {
    member: ModuleMember.Functional;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}