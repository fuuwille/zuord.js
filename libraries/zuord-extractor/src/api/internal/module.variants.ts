import * as fs from "fs";
import * as path from "path";
import { Project } from "ts-morph";
import { Module, ModuleModel } from "./module.model";
import { isModelNode } from "./node.variants";

export const extractModule = (dir: string, name: string): Module => {
    const modelPath = path.join(dir, `${name}.model.ts`);
    const variantsPath = path.join(dir, `${name}.variant.ts`);

    const modelText = fs.readFileSync(modelPath, "utf-8");
    const variantsText = fs.readFileSync(variantsPath, "utf-8");

    const project = new Project();
    
    const modelSource = project.createSourceFile(modelPath, modelText, { overwrite: true });
    const variantsSource = project.createSourceFile(variantsPath, variantsText, { overwrite: true });

    const models: ModuleModel[] = [];

    modelSource.forEachChild((node) => {
        if (isModelNode(node)) {
            const modelName = node.getName?.() || "Unnamed";
            models.push({
                node,
                type: "type",
                name: modelName,
                variants: [],
            });
        }
    });

    return { models, variants: [] };
};
