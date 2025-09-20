import path from "path";
import { Project } from "ts-morph";
import { Module, ModuleType } from "./module.model";
import { ModuleNode } from "./moduleNode.model";
import { extractModuleNode } from "./moduleNode.variants";

export const extractModule = ($dir: string, $name: string, $type: ModuleType): Module => {
    const dir = $dir;
    const name = $name;
    const type = $type;

    const fileName = $type === ModuleType.Model 
        ? `${$name}.model.ts` 
        : `${$name}.variants.ts`;

    const fullPath = path.join($dir, fileName);

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(fullPath);

    const nodes : ModuleNode[] = [];
    sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleNode(node);
        nodes.push(moduleNode);
    });


    return {
        dir,
        name,
        type,
        nodes,
    };
};