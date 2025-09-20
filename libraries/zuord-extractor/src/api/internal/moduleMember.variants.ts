import { Node, SourceFile } from "ts-morph";
import { ModuleMember, ModuleMemberKind } from "./moduleMember.model";
import { isModuleMember, isModuleEnumMember, isModuleFunctionMember, isModuleTypeMember, isModuleVariableMember, isModuleInterfaceMember } from "./_moduleMember.variants";

export const extractModuleMember = (node: Node) : ModuleMember | null => {
    if(!isModuleMember(node)) {
        return null;
    }

    const declaration = node;
    const kind = getModuleMemberKind(declaration);

    return {
        declaration,
        kind
    };
};

export const extractModuleMembers = ($sourceFile: SourceFile) : ModuleMember[] => {
    const nodes : ModuleMember[] = [];

    $sourceFile.forEachChild((node) => {
        const moduleNode = extractModuleMember(node);
    });

    return nodes;
};

export const getModuleMemberKind = (node: Node): ModuleMemberKind => {
    if (isModuleTypeMember(node)) {
        return ModuleMemberKind.Type;
    }

    if (isModuleInterfaceMember(node)) {
        return ModuleMemberKind.Interface;
    }

    if (isModuleEnumMember(node)) {
        return ModuleMemberKind.Enum;
    }

    if (isModuleFunctionMember(node)) {
        return ModuleMemberKind.Function;
    }

    if (isModuleVariableMember(node)) {
        return ModuleMemberKind.Variable;
    }

    return ModuleMemberKind.Unknown;
};