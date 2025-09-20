import { ModuleModelNode, ModuleVariantNode } from "./moduleNode.model";

export interface ModuleMember {
    kind: ModuleMemberKind;
};

export interface ModuleModelMember extends ModuleMember {
    node: ModuleModelNode;
}

export interface ModuleVariantMember extends ModuleMember {
    node: ModuleVariantNode;
}

export enum ModuleMemberKind {
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}