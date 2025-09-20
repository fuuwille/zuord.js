import { ModuleNode } from "./moduleNode.model";

export type Module = {
    name: string;
    type: ModuleType;
    nodes: ModuleNode[];
}

export type ModuleType = "model" | "variants";