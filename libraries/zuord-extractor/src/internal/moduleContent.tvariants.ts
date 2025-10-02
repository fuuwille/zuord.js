import { Module } from "./module.tschema";
import { ModuleContent } from "./moduleContent";
import { moduleContentKind } from "./moduleContentKind";
import { ModuleMember, moduleMember } from "./moduleMember";
import { getTypeName } from "./~type.tvariants";

export const isSchema = (content: ModuleContent.Common): content is ModuleContent.Schema => {
    return content.kind === moduleContentKind.Schema;
};

export const isVariant = (content: ModuleContent.Common): content is ModuleContent.Variant => {
    return content.kind === moduleContentKind.Variant;
};

//

export const isValueVariant = (content: ModuleContent.Common): content is ModuleContent.ValueVariant => {
    return moduleMember.isValueVariable(content.member);
}

export const isFunctionalVariant = (content: ModuleContent.Common): content is ModuleContent.FunctionalVariant => {
    return moduleMember.isFunctionalVariant(content.member);
}

//

export const createSchema = (
    module: Module, member: ModuleMember.SchemaLike
) : ModuleContent.Schema => {

    return {
        module,
        member,
        kind: moduleContentKind.Schema
    };
};

export const createVariant = (
    module: Module, member: ModuleMember.VariantLike
) : ModuleContent.Variant => {

    return {
        module,
        member,
        kind: moduleContentKind.Variant
    };
};

//

export const getName = (content: ModuleContent.Common) : string | undefined => {
    moduleMember.updateDefinitionLikeNameNode(content.member);
    return content.member.nameNode?.getText();
}

export const getValueVariantDeclaredSchemaName = (content: ModuleContent.ValueVariant) : string | undefined => {
    moduleMember.updateValueVariableDeclaredTypeNode(content.member);
    const typeNode = content.member.declaredTypeNode;
    return getTypeName(typeNode);
}

export const getFunctionalVariantReturnSchemaName = (content: ModuleContent.FunctionalVariant) : string | undefined => {
    const member = moduleMember.getFunctionLike(content.member);
    if(member) {
        moduleMember.updateFunctionLikeReturnTypeNode(member);
        const typeNode = member.returnTypeNode;
        return getTypeName(typeNode, member.node);
    }

    return undefined;
}

export const getFunctionalVariantParamSchemaName = (content: ModuleContent.FunctionalVariant) : string | undefined => {
    const member = moduleMember.getFunctionLike(content.member);

    if(member) {
        moduleMember.updateFunctionLikeParamTypeNode(member);
        const typeNode = member.paramTypeNode;
        return getTypeName(typeNode, member.node);
    }
}

export const getVariantSchema = (content: ModuleContent.Variant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    if(isValueVariant(content)) {
        return getValueVariantDeclaredSchema(content, schemas);
    }

    if(isFunctionalVariant(content)) {
        return getFunctionalVariantSchema(content, schemas);
    }
}

export const getValueVariantDeclaredSchema = (content: ModuleContent.ValueVariant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateValueVariantDeclaredSchemaName(content);

    return schemas.find(s => s.name === content.declaredSchemaName);
}

export const getFunctionalVariantSchema = (content: ModuleContent.FunctionalVariant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    return getFunctionalVariantReturnSchema(content, schemas)
        ?? getFunctionalVariantParamSchema(content, schemas);
}

export const getFunctionalVariantReturnSchema = (content: ModuleContent.FunctionalVariant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateFunctionalVariantReturnSchemaName(content);

    return schemas.find(s => s.name === content.returnSchemaName);
}

export const getFunctionalVariantParamSchema = (content: ModuleContent.FunctionalVariant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateFunctionalVariantParamSchemaName(content);

    return schemas.find(s => s.name === content.paramSchemaName);
}

//

export const updateName = (content: ModuleContent.Common) : void => {
    if(content.name == undefined) {
        content.name = getName(content);
    }
};

export const updateVariantSchema = (content: ModuleContent.Variant, schemas: ModuleContent.Schema[]) : void => {
    if(content.schema == undefined) {
        content.schema = getVariantSchema(content, schemas);
    }
};

export const updateValueVariantDeclaredSchema = (content: ModuleContent.ValueVariant, schemas: ModuleContent.Schema[]) : void => {
    if(content.schema == undefined) {
        content.schema = getValueVariantDeclaredSchema(content, schemas);
    }
}

export const updateValueVariantDeclaredSchemaName = (content: ModuleContent.ValueVariant) : void => {
    if(content.declaredSchemaName == undefined) {
        content.declaredSchemaName = getValueVariantDeclaredSchemaName(content);
    }
}

export const updateFunctionalVariantReturnSchemaName = (content: ModuleContent.FunctionalVariant) : void => {
    if(content.returnSchemaName == undefined) {
        content.returnSchemaName = getFunctionalVariantReturnSchemaName(content);
    }
};

export const updateFunctionalVariantParamSchemaName = (content: ModuleContent.FunctionalVariant) : void => {
    if(content.paramSchemaName == undefined) {
        content.paramSchemaName = getFunctionalVariantParamSchemaName(content);
    }
}