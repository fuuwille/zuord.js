import { Module } from "./module.tschema";
import { BaseContent, ContentKind, FunctionalContent, SchemaContent, ValueContent, VariantContent } from "./moduleContent.tschema";
import { SchemaLike, VariantLike } from "./moduleMember.tschema";
import { getFunctionLikeMember, isFunctional, isValue, isVariableValue, updateDefinitionLikeMemberNameNode, updateFunctionLikeMemberParamTypeNode, updateFunctionLikeMemberReturnTypeNode, updateVariableValueMemberDeclaredTypeNode } from "./moduleMember.tvariants";
import { getTypeName } from "./~type.tvariants";

export const isSchemaContent = (content: BaseContent): content is SchemaContent => {
    return content.kind === ContentKind.Schema;
};

export const isVariantContent = (content: BaseContent): content is VariantContent => {
    return content.kind === ContentKind.Variant;
};

//

export const isValueContent = (content: BaseContent): content is ValueContent => {
    return  isVariableValue(content.member);
}

export const isFunctionalContent = (content: BaseContent): content is FunctionalContent => {
    return  isFunctional(content.member);
}

//

export const createSchemaContent = (
    module: Module, member: SchemaLike
) : SchemaContent => {

    return {
        module,
        member,
        kind: ContentKind.Schema
    };
};

export const createVariantContent = (
    module: Module, member: VariantLike
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

export const getValueContentDeclaredSchemaName = (content: ValueContent) : string | undefined => {
    updateVariableValueMemberDeclaredTypeNode(content.member);
    const typeNode = content.member.declaredTypeNode;
    return getTypeName(typeNode);
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
    if(isValueContent(content)) {
        return getValueContentDeclaredSchema(content, schemas);
    }

    if(isFunctionalContent(content)) {
        return getFunctionalContentSchema(content, schemas);
    }
}

export const getValueContentDeclaredSchema = (content: ValueContent, schemas: SchemaContent[]) : SchemaContent | undefined => {
    updateValueContentDeclaredSchemaName(content);

    return schemas.find(s => s.name === content.declaredSchemaName);
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

export const updateVariantContentSchema = (content: VariantContent, schemas: SchemaContent[]) : void => {
    if(content.schema == undefined) {
        content.schema = getVariantContentSchema(content, schemas);
    }
};

export const updateValueContentDeclaredSchema = (content: ValueContent, schemas: SchemaContent[]) : void => {
    if(content.schema == undefined) {
        content.schema = getValueContentDeclaredSchema(content, schemas);
    }
}

export const updateValueContentDeclaredSchemaName = (content: ValueContent) : void => {
    if(content.declaredSchemaName == undefined) {
        content.declaredSchemaName = getValueContentDeclaredSchemaName(content);
    }
}

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