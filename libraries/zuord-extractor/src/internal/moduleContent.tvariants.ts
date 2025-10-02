import { Module } from "./module.tschema";
import { ModuleContent } from "./moduleContent";
import { moduleContentKind } from "./moduleContentKind";
import { ModuleMember } from "./moduleMember";
import { getFunctionLike, isFunctional, isVariableValue, updateDefinitionLikeNameNode, updateFunctionLikeParamTypeNode, updateFunctionLikeReturnTypeNode, updateVariableValueDeclaredTypeNode } from "./moduleMember.tvariants";
import { getTypeName } from "./~type.tvariants";

export const isSchemaContent = (content: ModuleContent.BaseContent): content is ModuleContent.SchemaContent => {
    return content.kind === moduleContentKind.Schema;
};

export const isVariantContent = (content: ModuleContent.BaseContent): content is ModuleContent.VariantContent => {
    return content.kind === moduleContentKind.Variant;
};

//

export const isValueContent = (content: ModuleContent.BaseContent): content is ModuleContent.ValueContent => {
    return isVariableValue(content.member);
}

export const isFunctionalContent = (content: ModuleContent.BaseContent): content is ModuleContent.FunctionalContent => {
    return isFunctional(content.member);
}

//

export const createSchemaContent = (
    module: Module, member: ModuleMember.SchemaLike
) : ModuleContent.SchemaContent => {

    return {
        module,
        member,
        kind: moduleContentKind.Schema
    };
};

export const createVariantContent = (
    module: Module, member: ModuleMember.VariantLike
) : ModuleContent.VariantContent => {

    return {
        module,
        member,
        kind: moduleContentKind.Variant
    };
};

//

export const getContentName = (content: ModuleContent.BaseContent) : string | undefined => {
    updateDefinitionLikeNameNode(content.member);
    return content.member.nameNode?.getText();
}

export const getValueContentDeclaredSchemaName = (content: ModuleContent.ValueContent) : string | undefined => {
    updateVariableValueDeclaredTypeNode(content.member);
    const typeNode = content.member.declaredTypeNode;
    return getTypeName(typeNode);
}

export const getFunctionalContentReturnSchemaName = (content: ModuleContent.FunctionalContent) : string | undefined => {
    const member = getFunctionLike(content.member);
    if(member) {
        updateFunctionLikeReturnTypeNode(member);
        const typeNode = member.returnTypeNode;
        return getTypeName(typeNode, member.node);
    }

    return undefined;
}

export const getFunctionalContentParamSchemaName = (content: ModuleContent.FunctionalContent) : string | undefined => {
    const member = getFunctionLike(content.member);

    if(member) {
        updateFunctionLikeParamTypeNode(member);
        const typeNode = member.paramTypeNode;
        return getTypeName(typeNode, member.node);
    }
}

export const getVariantContentSchema = (content: ModuleContent.VariantContent, schemas: ModuleContent.SchemaContent[]) : ModuleContent.SchemaContent | undefined => {
    if(isValueContent(content)) {
        return getValueContentDeclaredSchema(content, schemas);
    }

    if(isFunctionalContent(content)) {
        return getFunctionalContentSchema(content, schemas);
    }
}

export const getValueContentDeclaredSchema = (content: ModuleContent.ValueContent, schemas: ModuleContent.SchemaContent[]) : ModuleContent.SchemaContent | undefined => {
    updateValueContentDeclaredSchemaName(content);

    return schemas.find(s => s.name === content.declaredSchemaName);
}

export const getFunctionalContentSchema = (content: ModuleContent.FunctionalContent, schemas: ModuleContent.SchemaContent[]) : ModuleContent.SchemaContent | undefined => {
    return getFunctionalContentReturnSchema(content, schemas)
        ?? getFunctionalContentParamSchema(content, schemas);
}

export const getFunctionalContentReturnSchema = (content: ModuleContent.FunctionalContent, schemas: ModuleContent.SchemaContent[]) : ModuleContent.SchemaContent | undefined => {
    updateFunctionalContentReturnSchemaName(content);

    return schemas.find(s => s.name === content.returnSchemaName);
}

export const getFunctionalContentParamSchema = (content: ModuleContent.FunctionalContent, schemas: ModuleContent.SchemaContent[]) : ModuleContent.SchemaContent | undefined => {
    updateFunctionalContentParamSchemaName(content);

    return schemas.find(s => s.name === content.paramSchemaName);
}

//

export const updateContentName = (content: ModuleContent.BaseContent) : void => {
    if(content.name == undefined) {
        content.name = getContentName(content);
    }
};

export const updateVariantContentSchema = (content: ModuleContent.VariantContent, schemas: ModuleContent.SchemaContent[]) : void => {
    if(content.schema == undefined) {
        content.schema = getVariantContentSchema(content, schemas);
    }
};

export const updateValueContentDeclaredSchema = (content: ModuleContent.ValueContent, schemas: ModuleContent.SchemaContent[]) : void => {
    if(content.schema == undefined) {
        content.schema = getValueContentDeclaredSchema(content, schemas);
    }
}

export const updateValueContentDeclaredSchemaName = (content: ModuleContent.ValueContent) : void => {
    if(content.declaredSchemaName == undefined) {
        content.declaredSchemaName = getValueContentDeclaredSchemaName(content);
    }
}

export const updateFunctionalContentReturnSchemaName = (content: ModuleContent.FunctionalContent) : void => {
    if(content.returnSchemaName == undefined) {
        content.returnSchemaName = getFunctionalContentReturnSchemaName(content);
    }
};

export const updateFunctionalContentParamSchemaName = (content: ModuleContent.FunctionalContent) : void => {
    if(content.paramSchemaName == undefined) {
        content.paramSchemaName = getFunctionalContentParamSchemaName(content);
    }
}