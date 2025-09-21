import { ModuleMode } from "./module.model";
import { ModuleMember, ModuleMemberKind, ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export interface ModuleFile {
    mode: ModuleMode;
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