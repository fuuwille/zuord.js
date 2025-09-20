import { Node } from "ts-morph"

export type ModuleNode = {
    source: Node;
    kind: ModuleNodeKind;
};

export enum ModuleNodeKind {
    Type = 1 << 1, Interface = 1 << 2, Enum = 1 << 3,
    Model = ModuleNodeKind.Type | ModuleNodeKind.Interface | ModuleNodeKind.Enum,

    Function = 1 << 4, Variable = 1 << 5,
    Variant = ModuleNodeKind.Function | ModuleNodeKind.Variable,
}