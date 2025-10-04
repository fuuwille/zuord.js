import { Module } from "./module.zs";
import { ModuleContentKind } from "./moduleContent";
import * as ModuleDiagnostic from "./moduleDiagnostic.zs";
import * as ModuleMember from "./moduleMember.zs";

export interface Common {
    module: Module;
    member: ModuleMember.DefinitionLike;
    kind: ModuleContentKind;
    name?: string | null;
    diagnostics?: ModuleDiagnostic.Base[];
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
    member: ModuleMember.ValueVariable;
    declaredSchemaName?: string | null;
}

export interface FunctionalVariant extends Variant {
    member: ModuleMember.FunctionalVariant;
    returnSchemaName?: string | null;
    paramSchemaName?: string | null;
}