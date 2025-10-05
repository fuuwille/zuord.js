import { SourceFile } from "ts-morph";
import { ModuleMode } from "./module.zs";
import { ModuleMember } from "./moduleMember";

export interface Base {
    source: SourceFile
    mode: ModuleMode;
    members: ModuleMember.Base[];
    discarded: ModuleMember.Base[];
    others: ModuleMember.Base[];
};

export interface Schema extends ZSchema.Base {
    members: ModuleMember.SchemaLike[];
}

export interface Variants extends ZSchema.Base {
    members: ModuleMember.VariantLike[];
}