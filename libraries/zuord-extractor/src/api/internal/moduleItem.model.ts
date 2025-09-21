import { ModuleMember, ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export interface ModuleItem {
    member: ModuleMember
}

export interface ModuleModelItem extends ModuleItem {
    member: ModuleModelMember;
    variants: ModuleVariantMember[];
}

export interface ModuleVariantItem extends ModuleItem {
    member: ModuleVariantMember;
    model: ModuleModelItem;
}