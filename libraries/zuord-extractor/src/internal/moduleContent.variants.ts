import { Module } from "./module.tschema";
import { BaseContent, ContentKind, FunctionalContent, SchemaContent, VariantContent } from "./moduleContent.tschema";
import { SchemaLikeMember, VariantMember } from "./moduleMember.tschema";
import { getFunctionLikeMember, isFunctionalMember, updateDefinitionLikeMemberNameNode, updateFunctionLikeMemberParamTypeNode, updateFunctionLikeMemberReturnTypeNode } from "./moduleMember.variants";
import { getTypeName } from "./~type.variants";

export const isSchemaContent = (content: BaseContent): content is SchemaContent => {
    return content.kind === ContentKind.Schema;
};

export const isVariantContent = (content: BaseContent): content is VariantContent => {
    return content.kind === ContentKind.Variant;
};

//

export const isFunctionalContent = (content: BaseContent): content is FunctionalContent => {
    return  isFunctionalMember(content.member);
}

//

export const createSchemaContent = (
    module: Module, member: SchemaLikeMember
) : SchemaContent => {

    return {
        module,
        member,
        kind: ContentKind.Schema
    };
};

export const createVariantContent = (
    module: Module, member: VariantMember
) : VariantContent => {

    return {
        module,
        member,
        kind: ContentKind.Variant
    };
};

//

export const getContentName = (content: BaseContent) : string | undefined => {
    updateDefinitionLikeMemberNameNode(content.member);
    return content.member.nameNode?.getText();
}

export const getFunctionalContentReturnSchemaName = (content: FunctionalContent) : string | undefined => {
    const member = getFunctionLikeMember(content.member);
    if(member) {
        updateFunctionLikeMemberReturnTypeNode(member);
        const typeNode = member.returnTypeNode;
        return getTypeName(typeNode, member.node);
    }

    return undefined;
}

export const getFunctionalContentParamSchemaName = (content: FunctionalContent) : string | undefined => {
    const member = getFunctionLikeMember(content.member);

    if(member) {
        updateFunctionLikeMemberParamTypeNode(member);
        const typeNode = member.paramTypeNode;
        return getTypeName(typeNode, member.node);
    }
}

export const getVariantContentSchema = (content: VariantContent, schemas: SchemaContent[]) : SchemaContent | undefined => {
    if(isFunctionalContent(content)) {
        return getFunctionalContentSchema(content, schemas);
    }
}

export const getFunctionalContentSchema = (content: FunctionalContent, schemas: SchemaContent[]) : SchemaContent | undefined => {
    return getFunctionalContentReturnSchema(content, schemas)
        ?? getFunctionalContentParamSchema(content, schemas);
}

export const getFunctionalContentReturnSchema = (content: FunctionalContent, schemas: SchemaContent[]) : SchemaContent | undefined => {
    updateFunctionalContentReturnSchemaName(content);

    return schemas.find(s => s.name === content.returnSchemaName);
}

export const getFunctionalContentParamSchema = (content: FunctionalContent, schemas: SchemaContent[]) : SchemaContent | undefined => {
    updateFunctionalContentParamSchemaName(content);

    return schemas.find(s => s.name === content.paramSchemaName);
}

//

export const updateContentName = (content: BaseContent) : void => {
    if(content.name == undefined) {
        content.name = getContentName(content);
    }
};

export const updateFunctionalContentReturnSchemaName = (content: FunctionalContent) : void => {
    if(content.returnSchemaName == undefined) {
        content.returnSchemaName = getFunctionalContentReturnSchemaName(content);
    }
};

export const updateFunctionalContentParamSchemaName = (content: FunctionalContent) : void => {
    if(content.paramSchemaName == undefined) {
        content.paramSchemaName = getFunctionalContentParamSchemaName(content);
    }
}