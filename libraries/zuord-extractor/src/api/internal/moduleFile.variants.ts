import path from "path";
import { Node, Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind, ModuleVariantsFile } from "./moduleFile.model";
import { extractModuleModelMember, extractModuleVariantMember } from "./moduleMember.variants";
import { ModuleMember } from "./moduleMember.model";
import { isModuleMemberModelNode, isModuleMemberNode, isModuleMemberVariableNode } from "./moduleMemberNode.variants";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind, solve: {
        extract: (node: Node) => ModuleMember | null, 
        cancel: (node: Node) => boolean 
    }
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
        if(isModuleMemberNode(node)) {
            const moduleNode = solve.extract(node);

            if (moduleNode) {
                moduleFile.members.push(moduleNode);
            } else {
                if(solve.cancel(node)) {
                    moduleFile.invalids.push(node);
                }
            }
        }
    });

    return moduleFile;
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, { extract: extractModuleModelMember, cancel: isModuleMemberVariableNode }) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleVariantsFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Variants, { extract: extractModuleVariantMember, cancel: isModuleMemberModelNode }) as ModuleVariantsFile;
};