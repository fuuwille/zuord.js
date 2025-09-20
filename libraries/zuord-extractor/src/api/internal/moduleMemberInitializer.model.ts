import { Node } from "ts-morph";

export interface ModuleMemberInitializer {
    node: Node;
    kind: ModuleMemberInitializerKind;
}

export enum ModuleMemberInitializerKind {
    Value = "value",
    Function = "function"
}