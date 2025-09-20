import { Module, ModuleType } from "./module.model";
import { ModuleNode } from "./moduleNode.model";

export const extractModule = ($dir: string, $name: string, $type: ModuleType): Module => {
    const dir = $dir;
    const name = $name;
    const type = $type;
    const nodes = [] as ModuleNode[];

    return {
        dir,
        name,
        type,
        nodes,
    };
};