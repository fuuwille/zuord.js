import { Node } from "ts-morph";
import { ModuleMode } from "./module.zschema";
import { ModuleNode } from "./moduleNode";
import { ModuleNodeKind, moduleNodeKind } from "./moduleNodeKind";

export const isImport = (node: Node): node is ModuleNode.Import => {
    return node.getKind() === moduleNodeKind.Import;
}

export const isExport = (node: Node): node is ModuleNode.Export => {
    return node.getKind() === moduleNodeKind.Export;
}

export const isExportDefault = (node: Node): node is ModuleNode.ExportDefault => {
    return node.getKind() === moduleNodeKind.ExportDefault;
}

export const isType = (node: Node): node is ModuleNode.Type => {
    return node.getKind() === moduleNodeKind.Type;
}

export const isInterface = (node: Node): node is ModuleNode.Interface => {
    return node.getKind() === moduleNodeKind.Interface;
}

export const isEnum = (node: Node): node is ModuleNode.Enum => {
    return node.getKind() === moduleNodeKind.Enum;
}

export const isVariable = (node: Node): node is ModuleNode.Variable => {
    return node.getKind() === moduleNodeKind.Variable;
}

export const isFunction = (node: Node): node is ModuleNode.Function => {
    return node.getKind() === moduleNodeKind.Function;
}

export const isValue = (node: Node): node is ModuleNode.Value => {
    return moduleNodeKind.Values.includes(node.getKind() as ModuleNodeKind.Value);
}

export const isArrowFunction = (node: Node): node is ModuleNode.ArrowFunction => {
    return node.getKind() === moduleNodeKind.ArrowFunction;
}

export const isFunctionExpression = (node: Node): node is ModuleNode.FunctionExpression => {
    return node.getKind() === moduleNodeKind.FunctionExpression;
}

//

export const isKnownLike = (node: Node): node is ModuleNode.KnownLike => {
    return isESMLike(node) || isSchemaLike(node) || isVariantLike(node) || isInitializerLike(node);
}

export const isESMLike = (node: Node): node is ModuleNode.ESMLike => {
    return isImport(node) || isExport(node) || isExportDefault(node);
}

export const isExportLike = (node: Node): node is ModuleNode.ExportLike => {
    return isExport(node) || isExportDefault(node);
}

export const isDefinitionLike = (node: Node): node is ModuleNode.DefinitionLike => {
    return isSchemaLike(node) || isVariantLike(node);
}

export const isSchemaLike = (node: Node): node is ModuleNode.SchemaLike => {
    return isType(node) || isInterface(node);
}

export const isVariantLike = (node: Node): node is ModuleNode.VariantLike => {
    return isFunctionLike(node) || isVariable(node);
}

export const isInitializerLike = (node: Node): node is ModuleNode.InitializerLike => {
    return isValue(node) || isArrowFunction(node) || isFunctionExpression(node);
}

export const isFunctionLike = (node: Node): node is ModuleNode.FunctionLike => {
    return isFunction(node) || isFunctionAlt(node);
}

export const isFunctionAlt = (node: Node): node is ModuleNode.FunctionAlt => {
    return isArrowFunction(node) || isFunctionExpression(node);
}

//

export const isDiscarded = (node: Node, mode : ModuleMode): node is ModuleNode.Discarded => {
    switch(mode) {
        case ModuleMode.Schema:
            return isDiscardedSchema(node);
        case ModuleMode.Variants:
            return isDiscardedVariant(node);
        default:
            return false;
    }
}

export const isDiscardedSchema = (node: Node): node is ModuleNode.DiscardedSchema => {
    return isVariantLike(node);
}

export const isDiscardedVariant = (node: Node): node is ModuleNode.DiscardedVariant => {
    return isSchemaLike(node);
}