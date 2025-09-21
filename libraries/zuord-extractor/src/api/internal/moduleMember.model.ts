import { ModuleNode } from "./module.model";
import { ModuleMemberModelNode, ModuleMemberVariantNode, ModuleMemberESMNode } from "./moduleMemberNode.model";

export interface ModuleMember {
    node: ModuleNode
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
    errors?: string[];
};

export interface ModuleRawMember extends ModuleMember {
    errors: string[];
}

export interface ModuleUnknownMember extends ModuleMember {
    kind: ModuleMemberKind.Unknown;
}

export interface ModuleESMMember extends ModuleMember {
    node: ModuleMemberESMNode;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.Default;
}

export interface ModuleModelMember extends ModuleMember {
    node: ModuleMemberModelNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum;
}

export interface ModuleVariantMember extends ModuleMember {
    node: ModuleMemberVariantNode;
    kind: ModuleMemberKind.Function | ModuleMemberKind.Variable;
}

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    Default = "default",
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