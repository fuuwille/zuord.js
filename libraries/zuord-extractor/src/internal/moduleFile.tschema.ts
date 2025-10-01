import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { BaseMember, SchemaMember, VariantMember } from "./moduleMember.tschema";

export interface Base {
    source: SourceFile
    mode: ModuleMode;
    members: BaseMember[];
    discarded: BaseMember[];
    others: BaseMember[];
};

export interface Schema extends Base {
    members: SchemaMember[];
}

export interface Variants extends Base {
    members: VariantMember[];
}