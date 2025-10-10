import { ModuleDocument } from "./moduleDocument";
import { $ZuordExtractor as ZE } from "zuord-extractor";
import { moduleNameRegex } from "./utility";

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

//

export const getModuleInfo = (fileName: string): ModuleInfo | undefined => {
    const match = moduleNameRegex.exec(fileName);
    if (!match) return undefined;

    const [_, name, ext] = match;

    return {
        name,
        type: (ext === ".tzs" || ext === ".tzv") ? ModuleType.Source : ModuleType.Dist
    };
}