import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { BaseMember, SchemaMember, VariantMember } from "./moduleMember.tschema";

export interface BaseFile {
    source: SourceFile
    mode: ModuleMode;
    members: BaseMember[];
    discarded: BaseMember[];
    others: BaseMember[];
};

export interface SchemaFile extends BaseFile {
    members: SchemaMember[];
}

export interface VariantsFile extends BaseFile {
    members: VariantMember[];
}