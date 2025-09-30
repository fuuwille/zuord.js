import { Module } from "./module.tschema";
import { ModuleContent, ModuleContentKind, ModuleFunctionalVariantContent, ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";
import { isModuleFunctionalMember, updateModuleDefinitionLikeMemberNameNode } from "./moduleMember.variants";

export const isModuleSchemaContent = (content: ModuleContent): content is ModuleSchemaContent => {
    return content.kind === ModuleContentKind.Schema;
};

export const isModuleVariantContent = (content: ModuleContent): content is ModuleVariantContent => {
    return content.kind === ModuleContentKind.Variant;
};

//

export const isModuleFunctionalVariantContent = (content: ModuleContent): content is ModuleFunctionalVariantContent => {
    return  isModuleFunctionalMember(content.member);
}

//

export const createModuleSchemaContent = (
    module: Module, member: ModuleSchemaMember
) : ModuleSchemaContent => {

    return {
        module,
        member,
        kind: ModuleContentKind.Schema
    };
};

export const createModuleVariantContent = (
    module: Module, member: ModuleVariantMember
) : ModuleVariantContent => {

    return {
        module,
        member,
        kind: ModuleContentKind.Variant
    };
};

//

export const getModuleContentName = (content: ModuleContent) : string | undefined => {
    updateModuleDefinitionLikeMemberNameNode(content.member);
    return content.member.nameNode?.getText();
}

//

export const updateModuleContentName = (content: ModuleContent) : void => {
    if(content.name == undefined) {
        content.name = getModuleContentName(content);
    }
};