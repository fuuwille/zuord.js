import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleMember } from "./moduleMember";

export interface Base {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember.Base[];
    discarded: ModuleMember.Base[];
    others: ModuleMember.Base[];
};

export interface Schema extends Base {
    members: ModuleMember.SchemaLike[];
}

export interface Variants extends Base {
    members: ModuleMember.VariantLike[];
}