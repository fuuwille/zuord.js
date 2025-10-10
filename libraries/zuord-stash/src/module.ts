import { ModuleDocument } from "./moduleDocument";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export interface Module {
    info: ModuleInfo;
    document: ModuleDocument;
    source: ZE.Module | undefined;
}

export type ModuleInfo = {
    name: string;
    type: ModuleType;
}

export enum ModuleType {
    Source,
    Dist
}