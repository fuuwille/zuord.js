import { Module, ModuleType } from "./module.model";

export const extractModule = (dir: string, name: string, type: ModuleType): Module => {
    return {
        dir,
        name,
        type,
        nodes: [],
    };
};