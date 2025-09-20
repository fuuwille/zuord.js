import path from "path";
import { Node, Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind } from "./moduleFile.model";
import { extractModuleModelMember } from "./moduleMember.variants";
import { ModuleMember } from "./moduleMember.model";
import { isModuleVariableNode } from "./moduleNode.variants";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind, 
    solveMember: (node: Node) => ModuleMember | null,
    solveInvalids: (node: Node) => boolean
) : ModuleFile => {

    const fileName = `${name}.${kind.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    const moduleFile : ModuleFile = {
        kind,
        members: [],
        invalids: []
    };

    sourceFile.forEachChild((node) => {
        const moduleNode = solveMember(node);

        if (moduleNode) {
            moduleFile.members.push(moduleNode);
        } else {
            if(solveInvalids(node)) {
                moduleFile.invalids.push(node);
            }
        }
    });

    return moduleFile;
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, extractModuleModelMember, isModuleVariableNode) as ModuleModelFile;
};