import { Node } from "ts-morph";
import { ModuleModelFile, ModuleVariantsFile } from "./moduleFile.model";

export type Module = {
    modelFile: ModuleModelFile | null;
    variantsFile: ModuleVariantsFile | null;
}

export type ModuleNode = Node;