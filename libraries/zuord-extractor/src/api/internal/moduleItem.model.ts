import { ModuleMember, ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export interface ModuleItem {
    member: ModuleMember
}

export interface ModuleModelItem {
    member: ModuleModelMember;
    variants: ModuleVariantMember[];
}

export interface ModuleVariantItem {
    member: ModuleVariantMember
}