import { Node } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleNode } from "./moduleNode";
import { ModuleNodeKind, moduleNodeKind } from "./moduleNodeKind";

export const isImport = (node: Node): node is ModuleNode.ImportNode => {
    return node.getKind() === moduleNodeKind.Import;
}

export const isExport = (node: Node): node is ModuleNode.ExportNode => {
    return node.getKind() === moduleNodeKind.Export;
}

export const isExportDefault = (node: Node): node is ModuleNode.ExportDefaultNode => {
    return node.getKind() === moduleNodeKind.ExportDefault;
}

export const isType = (node: Node): node is ModuleNode.TypeNode => {
    return node.getKind() === moduleNodeKind.Type;
}

export const isInterface = (node: Node): node is ModuleNode.InterfaceNode => {
    return node.getKind() === moduleNodeKind.Interface;
}

export const isEnum = (node: Node): node is ModuleNode.EnumNode => {
    return node.getKind() === moduleNodeKind.Enum;
}

export const isVariable = (node: Node): node is ModuleNode.VariableNode => {
    return node.getKind() === moduleNodeKind.Variable;
}

export const isFunction = (node: Node): node is ModuleNode.FunctionNode => {
    return node.getKind() === moduleNodeKind.Function;
}

export const isValue = (node: Node): node is ModuleNode.ValueNode => {
    return moduleNodeKind.Values.includes(node.getKind() as ModuleNodeKind.Value);
}

export const isArrowFunction = (node: Node): node is ModuleNode.ArrowFunctionNode => {
    return node.getKind() === moduleNodeKind.ArrowFunction;
}

export const isFunctionExpression = (node: Node): node is ModuleNode.FunctionExpressionNode => {
    return node.getKind() === moduleNodeKind.FunctionExpression;
}

//

export const isKnownLike = (node: Node): node is ModuleNode.KnownLikeNode => {
    return isESMLike(node) || isSchemaLike(node) || isVariantLike(node) || isInitializerLike(node);
}

export const isESMLike = (node: Node): node is ModuleNode.ESMLikeNode => {
    return isImport(node) || isExport(node) || isExportDefault(node);
}

export const isExportLike = (node: Node): node is ModuleNode.ExportLikeNode => {
    return isExport(node) || isExportDefault(node);
}

export const isDefinitionLike = (node: Node): node is ModuleNode.DefinitionLikeNode => {
    return isSchemaLike(node) || isVariantLike(node);
}

export const isSchemaLike = (node: Node): node is ModuleNode.SchemaLikeNode => {
    return isType(node) || isInterface(node);
}

export const isVariantLike = (node: Node): node is ModuleNode.VariantLikeNode => {
    return isFunctionLike(node) || isVariable(node);
}

export const isInitializerLike = (node: Node): node is ModuleNode.InitializerLikeNode => {
    return isValue(node) || isArrowFunction(node) || isFunctionExpression(node);
}

export const isFunctionLike = (node: Node): node is ModuleNode.FunctionLikeNode => {
    return isFunction(node) || isFunctionAlt(node);
}

export const isFunctionAlt = (node: Node): node is ModuleNode.FunctionAltNode => {
    return isArrowFunction(node) || isFunctionExpression(node);
}

//

export const isDiscarded = (node: Node, mode : ModuleMode): node is ModuleNode.DiscardedNode => {
    switch(mode) {
        case ModuleMode.Schema:
            return isDiscardedSchema(node);
        case ModuleMode.Variants:
            return isDiscardedVariant(node);
        default:
            return false;
    }
}

export const isDiscardedSchema = (node: Node): node is ModuleNode.DiscardedSchemaNode => {
    return isVariantLike(node);
}

export const isDiscardedVariant = (node: Node): node is ModuleNode.DiscardedVariantNode => {
    return isSchemaLike(node);
}