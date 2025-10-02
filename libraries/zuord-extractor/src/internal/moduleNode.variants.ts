import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleNode } from "./moduleNode";
import { valueSyntaxKinds } from "./~valueSyntax";

export const isImportNode = (node: Node): node is ModuleNode.ImportNode => {
    return node.getKind() === importKind;
}

export const isExportNode = (node: Node): node is ModuleNode.ExportNode => {
    return node.getKind() === exportKind;
}

export const isExportDefaultNode = (node: Node): node is ModuleNode.ExportDefaultNode => {
    return node.getKind() === exportDefaultKind;
}

export const isTypeNode = (node: Node): node is ModuleNode.TypeNode => {
    return node.getKind() === typeKind;
}

export const isInterfaceNode = (node: Node): node is ModuleNode.InterfaceNode => {
    return node.getKind() === interfaceKind;
}

export const isVariableNode = (node: Node): node is ModuleNode.VariableNode => {
    return node.getKind() === variableKind;
}

export const isFunctionNode = (node: Node): node is ModuleNode.FunctionNode => {
    return node.getKind() === functionKind;
}

export const isValueNode = (node: Node): node is ModuleNode.ValueNode => {
    return valueKinds.includes(node.getKind() as ModuleNode.ValueKind);
}

export const isArrowFunctionNode = (node: Node): node is ModuleNode.ArrowFunctionNode => {
    return node.getKind() === arrowFunctionKind;
}

export const isFunctionExpressionNode = (node: Node): node is ModuleNode.FunctionExpressionNode => {
    return node.getKind() === functionExpressionKind;
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

//

export const importKind: ModuleNode.ImportKind = SyntaxKind.ImportDeclaration;

export const exportKind: ModuleNode.ExportKind = SyntaxKind.ExportDeclaration;

export const exportDefaultKind: ModuleNode.ExportDefaultKind = SyntaxKind.ExportAssignment;

export const typeKind: ModuleNode.TypeKind = SyntaxKind.TypeAliasDeclaration;

export const interfaceKind: ModuleNode.InterfaceKind = SyntaxKind.InterfaceDeclaration;

export const enumKind: ModuleNode.EnumKind = SyntaxKind.EnumDeclaration;

export const variableKind: ModuleNode.VariableKind = SyntaxKind.VariableStatement;

export const valueKinds: ModuleNode.ValueKind[] = valueSyntaxKinds;

export const functionKind: ModuleNode.FunctionKind = SyntaxKind.FunctionDeclaration;

export const arrowFunctionKind: ModuleNode.ArrowFunctionKind = SyntaxKind.ArrowFunction;

export const functionExpressionKind: ModuleNode.FunctionExpressionKind = SyntaxKind.FunctionExpression;