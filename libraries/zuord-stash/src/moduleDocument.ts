import { ModuleFile } from "./moduleFile"

export type ModuleDocument = {
    main: ModuleFile | undefined;
    schema: ModuleFile | undefined;
    variants: ModuleFile | undefined;
}