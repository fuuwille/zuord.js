import { ModuleFile } from "./moduleFile";

export interface Module {
    mainFile: ModuleFile | undefined;
    schemaFile: ModuleFile | undefined;
    variantsFile: ModuleFile | undefined;
}