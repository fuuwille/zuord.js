import { Node, SourceFile, VariableStatement } from "ts-morph";
import { ModuleNode, ModuleNodeKind } from "./moduleNode.model";
import { isModuleMember, isModuleEnumMember, isModuleFunctionMember, isModuleTypeMember, isModuleVariableMember, isModuleInterfaceMember } from "./moduleMember.variants";

export const extractModuleNode = (node: Node) : ModuleNode | null => {
    if(!isModuleMember(node)) {
        return null;
    }

    const declaration = node;
    const kind = getModuleNodeKind(declaration);

    return {
        declaration,
        kind
    };
};

export const extractModuleNodes = ($sourceFile: SourceFile) : ModuleNode[] => {
    const nodes : ModuleNode[] = [];

    $sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleNode(node);
    });

    return nodes;
};

export const getModuleNodeKind = (node: Node): ModuleNodeKind => {
    if (isModuleTypeMember(node)) {
        return ModuleNodeKind.Type;
    }

    if (isModuleInterfaceMember(node)) {
        return ModuleNodeKind.Interface;
    }

    if (isModuleEnumMember(node)) {
        return ModuleNodeKind.Enum;
    }

    if (isModuleFunctionMember(node)) {
        return ModuleNodeKind.Function;
    }

    if (isModuleVariableMember(node)) {
        return ModuleNodeKind.Variable;
    }

    return ModuleNodeKind.Unknown;
};