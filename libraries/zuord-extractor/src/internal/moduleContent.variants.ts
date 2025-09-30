import { Module } from "./module.tschema";
import { ModuleContent, ModuleContentKind, ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";
import { isModuleFunctionMember, isModuleVariableMember, updateModuleDefinitionLikeMemberNameNode } from "./moduleMember.variants";

export const isModuleSchemaContent = (content: ModuleContent): content is ModuleSchemaContent => {
    return content.kind === ModuleContentKind.Schema;
};

export const isModuleVariantContent = (content: ModuleContent): content is ModuleVariantContent => {
    return content.kind === ModuleContentKind.Variant;
};

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

export const updateModuleSchemaContentName = (content: ModuleSchemaContent) => {
    if(content.name == undefined) {
        updateModuleDefinitionLikeMemberNameNode(content.member);
        content.name = content.member.nameNode?.getText();
    }
};

export const updateModuleVariantContentName = (content: ModuleVariantContent) => {
    if(content.name == undefined) {
        const member = content.member;

        if(isModuleFunctionMember(member)){
            updateModuleDefinitionLikeMemberNameNode(member);
            content.name = member.nameNode?.getText();
        }
        else if(isModuleVariableMember(member)) {
            content.name = member.nameNode?.getText();
        }
    }
};