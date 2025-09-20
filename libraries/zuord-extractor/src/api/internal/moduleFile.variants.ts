import path from "path";
import { Node, Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind } from "./moduleFile.model";
import { extractModuleModelMember, extractModuleVariantMember } from "./moduleMember.variants";
import { ModuleMember } from "./moduleMember.model";
import { isModuleModelNode, isModuleVariableNode } from "./moduleNode.variants";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind, 
    solve: { member: (node: Node) => ModuleMember | null, invalid: (node: Node) => boolean }
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
        const moduleNode = solve.member(node);

        if (moduleNode) {
            moduleFile.members.push(moduleNode);
        } else {
            if(solve.invalid(node)) {
                moduleFile.invalids.push(node);
            }
        }
    });

    return moduleFile;
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, { member: extractModuleModelMember, invalid: isModuleVariableNode }) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleModelFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Variants, { member: extractModuleVariantMember, invalid: isModuleModelNode }) as ModuleModelFile;
};