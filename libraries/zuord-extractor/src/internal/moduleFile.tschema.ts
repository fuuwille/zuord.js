import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { BaseMember, SchemaLikeMember, VariantMember } from "./moduleMember.tschema";

export interface BaseFile {
    source: SourceFile
    mode: ModuleMode;
    members: BaseMember[];
    discarded: BaseMember[];
    others: BaseMember[];
};

export interface SchemaFile extends BaseFile {
    members: SchemaLikeMember[];
}

export interface VariantsFile extends BaseFile {
    members: VariantMember[];
}