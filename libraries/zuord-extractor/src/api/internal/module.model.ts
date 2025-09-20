import { ModuleNode } from "./moduleNode.model";

export type Module = {
    dir: string;
    name: string;
    type: ModuleType;
    nodes: ModuleNode[];
}

export enum ModuleType {
    Model = "model",
    Variants = "variants"
}