import { Module } from "./module.tschema";
import { ModuleContent } from "./moduleContent";
import { moduleContentKind } from "./moduleContentKind";
import { ModuleMember, moduleMember } from "./moduleMember";
import { getTypeName } from "./~type.tvariants";

export const isSchemaContent = (content: ModuleContent.Base): content is ModuleContent.Schema => {
    return content.kind === moduleContentKind.Schema;
};

export const isVariantContent = (content: ModuleContent.Base): content is ModuleContent.Variant => {
    return content.kind === moduleContentKind.Variant;
};

//

export const isValueContent = (content: ModuleContent.Base): content is ModuleContent.Value => {
    return moduleMember.isVariableValue(content.member);
}

export const isFunctionalContent = (content: ModuleContent.Base): content is ModuleContent.Functional => {
    return moduleMember.isFunctional(content.member);
}

//

export const createSchemaContent = (
    module: Module, member: ModuleMember.SchemaLike
) : ModuleContent.Schema => {

    return {
        module,
        member,
        kind: moduleContentKind.Schema
    };
};

export const createVariantContent = (
    module: Module, member: ModuleMember.VariantLike
) : ModuleContent.Variant => {

    return {
        module,
        member,
        kind: moduleContentKind.Variant
    };
};

//

export const getContentName = (content: ModuleContent.Base) : string | undefined => {
    moduleMember.updateDefinitionLikeNameNode(content.member);
    return content.member.nameNode?.getText();
}

export const getValueContentDeclaredSchemaName = (content: ModuleContent.Value) : string | undefined => {
    moduleMember.updateVariableValueDeclaredTypeNode(content.member);
    const typeNode = content.member.declaredTypeNode;
    return getTypeName(typeNode);
}

export const getFunctionalContentReturnSchemaName = (content: ModuleContent.Functional) : string | undefined => {
    const member = moduleMember.getFunctionLike(content.member);
    if(member) {
        moduleMember.updateFunctionLikeReturnTypeNode(member);
        const typeNode = member.returnTypeNode;
        return getTypeName(typeNode, member.node);
    }

    return undefined;
}

export const getFunctionalContentParamSchemaName = (content: ModuleContent.Functional) : string | undefined => {
    const member = moduleMember.getFunctionLike(content.member);

    if(member) {
        moduleMember.updateFunctionLikeParamTypeNode(member);
        const typeNode = member.paramTypeNode;
        return getTypeName(typeNode, member.node);
    }
}

export const getVariantContentSchema = (content: ModuleContent.Variant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    if(isValueContent(content)) {
        return getValueContentDeclaredSchema(content, schemas);
    }

    if(isFunctionalContent(content)) {
        return getFunctionalContentSchema(content, schemas);
    }
}

export const getValueContentDeclaredSchema = (content: ModuleContent.Value, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateValueContentDeclaredSchemaName(content);

    return schemas.find(s => s.name === content.declaredSchemaName);
}

export const getFunctionalContentSchema = (content: ModuleContent.Functional, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    return getFunctionalContentReturnSchema(content, schemas)
        ?? getFunctionalContentParamSchema(content, schemas);
}

export const getFunctionalContentReturnSchema = (content: ModuleContent.Functional, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateFunctionalContentReturnSchemaName(content);

    return schemas.find(s => s.name === content.returnSchemaName);
}

export const getFunctionalContentParamSchema = (content: ModuleContent.Functional, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateFunctionalContentParamSchemaName(content);

    return schemas.find(s => s.name === content.paramSchemaName);
}

//

export const updateContentName = (content: ModuleContent.Base) : void => {
    if(content.name == undefined) {
        content.name = getContentName(content);
    }
};

export const updateVariantContentSchema = (content: ModuleContent.Variant, schemas: ModuleContent.Schema[]) : void => {
    if(content.schema == undefined) {
        content.schema = getVariantContentSchema(content, schemas);
    }
};

export const updateValueContentDeclaredSchema = (content: ModuleContent.Value, schemas: ModuleContent.Schema[]) : void => {
    if(content.schema == undefined) {
        content.schema = getValueContentDeclaredSchema(content, schemas);
    }
}

export const updateValueContentDeclaredSchemaName = (content: ModuleContent.Value) : void => {
    if(content.declaredSchemaName == undefined) {
        content.declaredSchemaName = getValueContentDeclaredSchemaName(content);
    }
}

export const updateFunctionalContentReturnSchemaName = (content: ModuleContent.Functional) : void => {
    if(content.returnSchemaName == undefined) {
        content.returnSchemaName = getFunctionalContentReturnSchemaName(content);
    }
};

export const updateFunctionalContentParamSchemaName = (content: ModuleContent.Functional) : void => {
    if(content.paramSchemaName == undefined) {
        content.paramSchemaName = getFunctionalContentParamSchemaName(content);
    }
}