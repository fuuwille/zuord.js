import { $ZuordExtractor as ZE } from "zuord-extractor";
import { moduleNameRegex } from "./utility";
import { ModuleFile } from "./moduleFile"

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

export type ModuleDocument = {
    main: ModuleFile | undefined;
    schema: ModuleFile | undefined;
    variants: ModuleFile | undefined;
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