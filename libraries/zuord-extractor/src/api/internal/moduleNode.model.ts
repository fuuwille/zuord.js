import { Node } from "ts-morph"

export type ModuleNode = {
    source: Node;
    kind: ModuleNodeKind;
    category: ModuleNodeCategory;
};

export enum ModuleNodeKind {
    Type = 1 << 1, Interface = 1 << 2, Enum = 1 << 3,
    Function = 1 << 4, Variable = 1 << 5,
}

export enum ModuleNodeCategory {
    Model = 1 << 1,
    Variant = 1 << 2,
}