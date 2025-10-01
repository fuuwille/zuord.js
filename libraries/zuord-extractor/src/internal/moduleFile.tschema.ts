import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleMember, ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";

export interface Base {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember[];
    discarded: ModuleMember[];
    others: ModuleMember[];
};

export interface Schema extends Base {
    members: ModuleSchemaMember[];
}

export interface Variants extends Base {
    members: ModuleVariantMember[];
}