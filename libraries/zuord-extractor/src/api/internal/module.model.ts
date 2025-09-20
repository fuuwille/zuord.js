import { ModuleMember } from "./moduleMember.model";

export type Module = {
    dir: string;
    name: string;
    type: ModuleType;
    nodes: ModuleMember[];
}

export enum ModuleType {
    Model = "model",
    Variants = "variants"
}