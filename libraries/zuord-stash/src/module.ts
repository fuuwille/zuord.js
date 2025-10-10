import { ModuleDocument } from "./moduleDocument";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export interface Module {
    name: string;
    type: ModuleType;
    document: ModuleDocument;
    source: ZE.Module | undefined;
}

export enum ModuleType {
    Source,
    Dist
}