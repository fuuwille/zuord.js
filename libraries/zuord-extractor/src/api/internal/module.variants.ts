import * as fs from "fs";
import * as path from "path";
import { ts } from "ts-morph";

export const extractModule = (dir: string, name: string) => {
    const modelPath = path.join(dir, `${name}.model.ts`);
    const variantsPath = path.join(dir, `${name}.variants.ts`);

    const modelText = fs.readFileSync(modelPath, "utf-8");
    const variantsText = fs.readFileSync(variantsPath, "utf-8");

    const modelSource = ts.createSourceFile(
        modelPath,
        modelText,
        ts.ScriptTarget.Latest,
        true
    );

    const variantsSource = ts.createSourceFile(
        variantsPath,
        variantsText,
        ts.ScriptTarget.Latest,
        true
    );

    return { modelSource, variantsSource };
};