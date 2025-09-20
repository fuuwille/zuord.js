import path from "path";
import { Node, Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind, ModuleVariantsFile } from "./moduleFile.model";
import { extractModuleModelMember, extractModuleVariantMember } from "./moduleMember.variants";
import { ModuleMember } from "./moduleMember.model";
import { isModuleMemberModelNode, isModuleMemberNode, isModuleMemberVariableNode } from "./moduleMemberNode.variants";
import { ModuleMemberNode } from "./moduleMemberNode.model";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind, solve: {
        extract: (node: ModuleMemberNode) => ModuleMember, 
        discard: (node: ModuleMemberNode) => boolean 
    }
) : ModuleFile => {

    const fileName = `${name}.${kind.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    const moduleFile : ModuleFile = {
        kind,
        members: [],
        discarded: []
    };

    sourceFile.forEachChild((node) => {
        if(isModuleMemberNode(node)) {
            if(solve.discard(node)) {
                moduleFile.discarded.push(node);
                return;
            }

            try {
                const moduleNode = solve.extract(node);
                moduleFile.members.push(moduleNode);
            } catch (e) {
                
            }
        }
    });

    return moduleFile;
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, { extract: extractModuleModelMember, discard: isModuleMemberVariableNode }) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleVariantsFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Variants, { extract: extractModuleVariantMember, discard: isModuleMemberModelNode }) as ModuleVariantsFile;
};