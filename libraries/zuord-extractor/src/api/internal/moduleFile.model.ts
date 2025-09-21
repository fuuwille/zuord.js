import { ModuleMode } from "./module.model";
import { ModuleMember, ModuleMemberKind, ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";
import { ModuleFileNode } from "./moduleNode.model";

export interface ModuleFile extends ModuleMember {
    mode: ModuleMode;
    node: ModuleFileNode;
    kind: ModuleMemberKind.File;
    members: ModuleMember[];
    discarded: ModuleMember[];
    others: ModuleMember[];
};

export interface ModuleModelFile extends ModuleFile {
    members: ModuleModelMember[];
}

export interface ModuleVariantsFile extends ModuleFile {
    members: ModuleVariantMember[];
}