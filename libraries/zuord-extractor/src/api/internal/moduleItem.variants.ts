import { ModuleModelItem, ModuleVariantItem } from "./moduleItem.model";
import { ModuleModelMember, ModuleVariantMember } from "./moduleMember.model";

export const createModuleModelItem = (
    member: ModuleModelMember
) : ModuleModelItem => {
    
    return {
        member,
        variants: [],
    };
};

export const createModuleVariantItem = (
    model: ModuleModelItem, member: ModuleVariantMember
) : ModuleVariantItem => {

    return {
        member,
        model
    };
};