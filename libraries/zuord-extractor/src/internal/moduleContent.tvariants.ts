import { Module } from "./module.tschema";
import { ModuleContent } from "./moduleContent";
import { moduleContentKind } from "./moduleContentKind";
import { ModuleMember, moduleMember } from "./moduleMember";
import { getTypeName } from "./~type.tvariants";

export const isSchema = (content: ModuleContent.Base): content is ModuleContent.Schema => {
    return content.kind === moduleContentKind.Schema;
};

export const isVariant = (content: ModuleContent.Base): content is ModuleContent.Variant => {
    return content.kind === moduleContentKind.Variant;
};

//

export const isValue = (content: ModuleContent.Base): content is ModuleContent.Value => {
    return moduleMember.isVariableValue(content.member);
}

export const isFunctional = (content: ModuleContent.Base): content is ModuleContent.Functional => {
    return moduleMember.isFunctional(content.member);
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

export const getName = (content: ModuleContent.Base) : string | undefined => {
    moduleMember.updateDefinitionLikeNameNode(content.member);
    return content.member.nameNode?.getText();
}

export const getValueDeclaredSchemaName = (content: ModuleContent.Value) : string | undefined => {
    moduleMember.updateVariableValueDeclaredTypeNode(content.member);
    const typeNode = content.member.declaredTypeNode;
    return getTypeName(typeNode);
}

export const getFunctionalReturnSchemaName = (content: ModuleContent.Functional) : string | undefined => {
    const member = moduleMember.getFunctionLike(content.member);
    if(member) {
        moduleMember.updateFunctionLikeReturnTypeNode(member);
        const typeNode = member.returnTypeNode;
        return getTypeName(typeNode, member.node);
    }

    return undefined;
}

export const getFunctionalParamSchemaName = (content: ModuleContent.Functional) : string | undefined => {
    const member = moduleMember.getFunctionLike(content.member);

    if(member) {
        moduleMember.updateFunctionLikeParamTypeNode(member);
        const typeNode = member.paramTypeNode;
        return getTypeName(typeNode, member.node);
    }
}

export const getVariantSchema = (content: ModuleContent.Variant, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    if(isValue(content)) {
        return getValueDeclaredSchema(content, schemas);
    }

    if(isFunctional(content)) {
        return getFunctionalSchema(content, schemas);
    }
}

export const getValueDeclaredSchema = (content: ModuleContent.Value, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateValueDeclaredSchemaName(content);

    return schemas.find(s => s.name === content.declaredSchemaName);
}

export const getFunctionalSchema = (content: ModuleContent.Functional, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    return getFunctionalReturnSchema(content, schemas)
        ?? getFunctionalParamSchema(content, schemas);
}

export const getFunctionalReturnSchema = (content: ModuleContent.Functional, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateFunctionalReturnSchemaName(content);

    return schemas.find(s => s.name === content.returnSchemaName);
}

export const getFunctionalParamSchema = (content: ModuleContent.Functional, schemas: ModuleContent.Schema[]) : ModuleContent.Schema | undefined => {
    updateFunctionalParamSchemaName(content);

    return schemas.find(s => s.name === content.paramSchemaName);
}

//

export const updateName = (content: ModuleContent.Base) : void => {
    if(content.name == undefined) {
        content.name = getName(content);
    }
};

export const updateVariantSchema = (content: ModuleContent.Variant, schemas: ModuleContent.Schema[]) : void => {
    if(content.schema == undefined) {
        content.schema = getVariantSchema(content, schemas);
    }
};

export const updateValueDeclaredSchema = (content: ModuleContent.Value, schemas: ModuleContent.Schema[]) : void => {
    if(content.schema == undefined) {
        content.schema = getValueDeclaredSchema(content, schemas);
    }
}

export const updateValueDeclaredSchemaName = (content: ModuleContent.Value) : void => {
    if(content.declaredSchemaName == undefined) {
        content.declaredSchemaName = getValueDeclaredSchemaName(content);
    }
}

export const updateFunctionalReturnSchemaName = (content: ModuleContent.Functional) : void => {
    if(content.returnSchemaName == undefined) {
        content.returnSchemaName = getFunctionalReturnSchemaName(content);
    }
};

export const updateFunctionalParamSchemaName = (content: ModuleContent.Functional) : void => {
    if(content.paramSchemaName == undefined) {
        content.paramSchemaName = getFunctionalParamSchemaName(content);
    }
}