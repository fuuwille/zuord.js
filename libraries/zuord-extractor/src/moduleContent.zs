import { Module } from "./module.zs";
import { ModuleContentKind } from "./moduleContent";
import * as ModuleDiagnostic from "./moduleDiagnostic.zs";
import * as ModuleMember from "./moduleMember.zs";

export interface Base {
    module: Module;
    member: ModuleMember.DefinitionLike;
    kind: ModuleContentKind;
    name?: string | null;
    diagnostics?: ModuleDiagnostic.Base[];
}

export interface Schema extends Base {
    member: ModuleMember.SchemaLike;
    kind: ModuleContentKind.Schema;
    variants?: Variant[];
}

export interface Variant extends Base {
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