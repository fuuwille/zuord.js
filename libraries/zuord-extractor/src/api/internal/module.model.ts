import { Node } from "ts-morph";

export type Module = {
    models: ModuleModel[];
}

export interface ModuleElement {
    node: Node;
    name: string;
}

export interface ModuleModel extends ModuleElement {
    type: "type" | "interface";
    variants: ModuleVariant[];
}

export interface ModuleVariant extends ModuleElement {
    type: "function" | "value";
}