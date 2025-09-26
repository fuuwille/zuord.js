import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.model";
import { ModuleMember, ModuleTypeMember, ModuleVariantMember } from "./moduleMember.model";

export interface ModuleFile {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember[];
    discarded: ModuleMember[];
    others: ModuleMember[];
};

export interface ModuleModelFile extends ModuleFile {
    members: ModuleTypeMember[];
}

export interface ModuleVariantsFile extends ModuleFile {
    members: ModuleVariantMember[];
}