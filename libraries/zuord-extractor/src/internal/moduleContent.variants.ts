import { Module } from "./module.tschema";
import { ModuleContent, ModuleContentKind, ModuleFunctionalContent, ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";
import { getModuleFunctionLikeMember, isModuleFunctionalMember, updateModuleDefinitionLikeMemberNameNode, updateModuleFunctionLikeMemberReturnTypeNode } from "./moduleMember.variants";
import { getTypeReferenceDescendant, isTypePredicateNode, isTypeReferenceNode } from "./~type.variants";

export const isModuleSchemaContent = (content: ModuleContent): content is ModuleSchemaContent => {
    return content.kind === ModuleContentKind.Schema;
};

export const isModuleVariantContent = (content: ModuleContent): content is ModuleVariantContent => {
    return content.kind === ModuleContentKind.Variant;
};

//

export const isModuleFunctionalContent = (content: ModuleContent): content is ModuleFunctionalContent => {
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

export const getModuleFunctionalContentReturnType = (content: ModuleFunctionalContent) : string | undefined => {
    const member = getModuleFunctionLikeMember(content.member);
    if(member) {
        updateModuleFunctionLikeMemberReturnTypeNode(member);
        const typeNode = member.returnTypeNode;

        var typeRef;
        if(isTypeReferenceNode(typeNode)) {
            typeRef = typeNode;
        }
        else {
            typeRef = getTypeReferenceDescendant(typeNode);
        }
    }

    return undefined;
}

//

export const updateModuleContentName = (content: ModuleContent) : void => {
    if(content.name == undefined) {
        content.name = getModuleContentName(content);
    }
};