import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.type";
import { ModuleMember, ModuleTypeMember, ModuleVariantMember } from "./moduleMember.type";

export interface ModuleFile {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember[];
    discarded: ModuleMember[];
    others: ModuleMember[];
};

export interface ModuleTypeFile extends ModuleFile {
    members: ModuleTypeMember[];
}

export interface ModuleVariantsFile extends ModuleFile {
    members: ModuleVariantMember[];
}