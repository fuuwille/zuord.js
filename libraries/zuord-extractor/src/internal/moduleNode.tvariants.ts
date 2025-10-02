import { Node } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleNode } from "./moduleNode";
import { ModuleNodeKind, moduleNodeKind } from "./moduleNodeKind";

export const isImportNode = (node: Node): node is ModuleNode.ImportNode => {
    return node.getKind() === moduleNodeKind.Import;
}

export const isExportNode = (node: Node): node is ModuleNode.ExportNode => {
    return node.getKind() === moduleNodeKind.Export;
}

export const isExportDefaultNode = (node: Node): node is ModuleNode.ExportDefaultNode => {
    return node.getKind() === moduleNodeKind.ExportDefault;
}

export const isTypeNode = (node: Node): node is ModuleNode.TypeNode => {
    return node.getKind() === moduleNodeKind.Type;
}

export const isInterfaceNode = (node: Node): node is ModuleNode.InterfaceNode => {
    return node.getKind() === moduleNodeKind.Interface;
}

export const isEnumNode = (node: Node): node is ModuleNode.EnumNode => {
    return node.getKind() === moduleNodeKind.Enum;
}

export const isVariableNode = (node: Node): node is ModuleNode.VariableNode => {
    return node.getKind() === moduleNodeKind.Variable;
}

export const isFunctionNode = (node: Node): node is ModuleNode.FunctionNode => {
    return node.getKind() === moduleNodeKind.Function;
}

export const isValueNode = (node: Node): node is ModuleNode.ValueNode => {
    return moduleNodeKind.Values.includes(node.getKind() as ModuleNodeKind.Value);
}

export const isArrowFunctionNode = (node: Node): node is ModuleNode.ArrowFunctionNode => {
    return node.getKind() === moduleNodeKind.ArrowFunction;
}

export const isFunctionExpressionNode = (node: Node): node is ModuleNode.FunctionExpressionNode => {
    return node.getKind() === moduleNodeKind.FunctionExpression;
}

//

export const isKnownLikeNode = (node: Node): node is ModuleNode.KnownLikeNode => {
    return isESMLikeNode(node) || isSchemaLikeNode(node) || isVariantLikeNode(node) || isInitializerLikeNode(node);
}

export const isESMLikeNode = (node: Node): node is ModuleNode.ESMLikeNode => {
    return isImportNode(node) || isExportNode(node) || isExportDefaultNode(node);
}

export const isExportLikeNode = (node: Node): node is ModuleNode.ExportLikeNode => {
    return isExportNode(node) || isExportDefaultNode(node);
}

export const isDefinitionLikeNode = (node: Node): node is ModuleNode.DefinitionLikeNode => {
    return isSchemaLikeNode(node) || isVariantLikeNode(node);
}

export const isSchemaLikeNode = (node: Node): node is ModuleNode.SchemaLikeNode => {
    return isTypeNode(node) || isInterfaceNode(node);
}

export const isVariantLikeNode = (node: Node): node is ModuleNode.VariantLikeNode => {
    return isFunctionLikeNode(node) || isVariableNode(node);
}

export const isInitializerLikeNode = (node: Node): node is ModuleNode.InitializerLikeNode => {
    return isValueNode(node) || isArrowFunctionNode(node) || isFunctionExpressionNode(node);
}

export const isFunctionLikeNode = (node: Node): node is ModuleNode.FunctionLikeNode => {
    return isFunctionNode(node) || isFunctionAltNode(node);
}

export const isFunctionAltNode = (node: Node): node is ModuleNode.FunctionAltNode => {
    return isArrowFunctionNode(node) || isFunctionExpressionNode(node);
}

//

export const isDiscardedNode = (node: Node, mode : ModuleMode): node is ModuleNode.DiscardedNode => {
    switch(mode) {
        case ModuleMode.Schema:
            return isDiscardedSchemaNode(node);
        case ModuleMode.Variants:
            return isDiscardedVariantNode(node);
        default:
            return false;
    }
}

export const isDiscardedSchemaNode = (node: Node): node is ModuleNode.DiscardedSchemaNode => {
    return isVariantLikeNode(node);
}

export const isDiscardedVariantNode = (node: Node): node is ModuleNode.DiscardedVariantNode => {
    return isSchemaLikeNode(node);
}