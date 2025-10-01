import { Module } from "./module.tschema";
import { ModuleContent, ModuleContentKind, ModuleFunctionalContent, ModuleSchemaContent, ModuleVariantContent } from "./moduleContent.tschema";
import { ModuleSchemaMember, ModuleVariantMember } from "./moduleMember.tschema";
import { getModuleFunctionLikeMember, isModuleFunctionalMember, updateModuleDefinitionLikeMemberNameNode, updateModuleFunctionLikeMemberParamTypeNode, updateModuleFunctionLikeMemberReturnTypeNode } from "./moduleMember.variants";
import { getIdentifierChild, getTypeName, getTypeReferenceChild, isTypePredicateNode, isTypeReferenceNode } from "./~type.variants";

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

export const getModuleFunctionalContentReturnSchemaName = (content: ModuleFunctionalContent) : string | undefined => {
    const member = getModuleFunctionLikeMember(content.member);
    if(member) {
        updateModuleFunctionLikeMemberReturnTypeNode(member);
        const typeNode = member.returnTypeNode;

        var name = getTypeName(typeNode);

        if(name) {
            const typeParameter = member.node.getTypeParameter(name);

            if(typeParameter) {
                name = getTypeName(typeParameter);
            }
        }

        return name;
    }

    return undefined;
}

export const getModuleFunctionalContentParamSchemaName = (content: ModuleFunctionalContent) : string | undefined => {
    const member = getModuleFunctionLikeMember(content.member);

    if(member) {
        updateModuleFunctionLikeMemberParamTypeNode(member);
        const typeNode = member.paramTypeNode;

        var name = getTypeName(typeNode);

        if(name) {
            const typeParameter = member.node.getTypeParameter(name);

            if(typeParameter) {
                name = getTypeName(typeParameter);
            }
        }

        return name;
    }
}

export const getModuleVariantContentSchema = (content: ModuleVariantContent, schemas: ModuleSchemaContent[]) : ModuleSchemaContent | undefined => {
    if(isModuleFunctionalContent(content)) {
        return getModuleFunctionalContentSchema(content, schemas);
    }
}

export const getModuleFunctionalContentSchema = (content: ModuleFunctionalContent, schemas: ModuleSchemaContent[]) : ModuleSchemaContent | undefined => {
    var schema = getModuleFunctionalContentReturnSchema(content, schemas);

    if(!schema) {

    }

    return schema;
}

export const getModuleFunctionalContentReturnSchema = (content: ModuleFunctionalContent, schemas: ModuleSchemaContent[]) : ModuleSchemaContent | undefined => {
    updateModuleFunctionalContentReturnSchemaName(content);

    return schemas.find(s => s.name === content.returnSchemaName);
}

//

export const updateModuleContentName = (content: ModuleContent) : void => {
    if(content.name == undefined) {
        content.name = getModuleContentName(content);
    }
};

export const updateModuleFunctionalContentReturnSchemaName = (content: ModuleFunctionalContent) : void => {
    if(content.returnSchemaName == undefined) {
        content.returnSchemaName = getModuleFunctionalContentReturnSchemaName(content);
    }
};

export const updateModuleFunctionalContentParamSchemaName = (content: ModuleFunctionalContent) : void => {
    if(content.paramSchemaName == undefined) {
        content.paramSchemaName = getModuleFunctionalContentParamSchemaName(content);
    }
}