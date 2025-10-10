import { ModuleDocument } from "./moduleDocument";

export interface Module {
    type: ModuleType;
    document: ModuleDocument;
}

export enum ModuleType {
    Source,
    Dist
}