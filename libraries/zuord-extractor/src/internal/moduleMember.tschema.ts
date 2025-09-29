import { ModuleFunctionRef, ModuleRef, ModuleTypeLikeRef, ModuleVariableRef, ModuleVariantLikeRef } from "./moduleRef.tschema";

export interface ModuleMember {
    ref: ModuleRef,
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
};

export interface ModuleUnknownMember extends ModuleMember {
    kind: ModuleMemberKind.Unknown;
    ref: never;
}

export interface ModuleESMLikeMember extends ModuleMember {
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface ModuleImportMember extends ModuleESMLikeMember {
    kind: ModuleMemberKind.Import;
}

export interface ModuleExportLikeMember extends ModuleESMLikeMember {
    kind: ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface ModuleExportMember extends ModuleExportLikeMember {
    kind: ModuleMemberKind.Export;
}

export interface ModuleExportDefaultMember extends ModuleExportLikeMember {
    kind: ModuleMemberKind.ExportDefault;
}

export interface ModuleDefinitionLikeMember extends ModuleMember {
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum | ModuleMemberKind.Function | ModuleMemberKind.Variable;
    id: string;
}

export interface ModuleSchemaLikeMember extends ModuleDefinitionLikeMember {
    ref: ModuleTypeLikeRef;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum;
}

export interface ModuleTypeMember extends ModuleSchemaLikeMember {
    kind: ModuleMemberKind.Type;
}

export interface ModuleInterfaceMember extends ModuleSchemaLikeMember {
    kind: ModuleMemberKind.Interface;
}

export interface ModuleEnumMember extends ModuleSchemaLikeMember {
    kind: ModuleMemberKind.Enum;
}

export interface ModuleVariantLikeMember extends ModuleDefinitionLikeMember {
    ref: ModuleVariantLikeRef;
    kind: ModuleMemberKind.Function | ModuleMemberKind.Variable;
}

export interface ModuleFunctionMember extends ModuleVariantLikeMember {
    ref: ModuleFunctionRef;
    kind: ModuleMemberKind.Function;
}

export interface ModuleVariableMember extends ModuleVariantLikeMember {
    ref: ModuleVariableRef;
    kind: ModuleMemberKind.Variable;
}

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    ExportDefault = "export-default",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}

export enum ModuleMemberSlot {
    Value = "value",
    Function = "function"
}