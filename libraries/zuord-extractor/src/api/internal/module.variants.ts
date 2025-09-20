import { Module, ModuleType } from "./module.model";

export const extractModule = (dir: string, name: string, type: ModuleType): Module => {
    return {
        name,
        type,
        nodes: [],
    };
};