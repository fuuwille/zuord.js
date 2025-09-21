import { VariableStatement } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberSlot, ModuleRawMember, ModuleESMMember } from "./moduleMember.model";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleModelNode, isModuleVariantNode, isModuleExportNode, isModuleDefaultNode, isModuleImportNode, isModuleESMNode, isModuleFunctionLikeNode, isModuleFileNode } from "./moduleNode.variants";
import { ModuleModelNode, ModuleNode, ModuleVariantNode } from "./moduleNode.model";

export const initializeModuleMember = (
    node: ModuleNode, resolve?: (member: ModuleRawMember) => void
) : ModuleMember => {

    const moduleMember = {
        node,
        kind: getModuleMemberKind(node),
        errors: []
    } as ModuleMember;

    resolve?.(moduleMember as ModuleRawMember);

    if(moduleMember.errors!.length == 0) {
        delete moduleMember.errors;
    }

    return moduleMember;
}

export const extractModuleMember = (node: ModuleNode) : ModuleMember => {

    if(isModuleESMNode(node)) {
        return extractModuleESMMember(node);
    }

    if(isModuleModelNode(node)) {
        return extractModuleModelMember(node);
    }

    if(isModuleVariantNode(node)) {
        return extractModuleVariantMember(node);
    }

    return initializeModuleMember(node);
};

export const extractModuleESMMember = (node: ModuleNode) : ModuleESMMember => {
    return initializeModuleMember(node) as ModuleESMMember;
};

export const extractModuleModelMember = (node: ModuleModelNode) : ModuleModelMember => {
    return initializeModuleMember(node) as ModuleModelMember;
};

export const extractModuleVariantMember = (node: ModuleVariantNode) : ModuleVariantMember => {
    return initializeModuleMember(node, (member) => {
        if(member.node instanceof VariableStatement) {
            const declarations = member.node.getDeclarations();

            if(declarations.length == 0) {
                member.errors.push("VariableStatement has no declaration");
                return;
            }

            if(declarations.length > 1) {
                member.errors.push("VariableStatement must have exactly one declaration");
            }

            const declaration = declarations[0];
            const initializer = declaration.getInitializer();

            if(initializer) {
                if (isModuleFunctionLikeNode(initializer)) {
                    member.slot = ModuleMemberSlot.Function;
                }
                else {
                    member.slot = ModuleMemberSlot.Value;
                }
            }
            else {
                member.errors.push("VariableStatement has no initializer");
            }
        }
    }) as ModuleVariantMember;
}

export const getModuleMemberKind = (node: ModuleNode): ModuleMemberKind => {
    if (isModuleFileNode(node)) {
        return ModuleMemberKind.File;
    }

    if (isModuleImportNode(node)) {
        return ModuleMemberKind.Import;
    }

    if (isModuleExportNode(node)) {
        return ModuleMemberKind.Export;
    }

    if (isModuleDefaultNode(node)) {
        return ModuleMemberKind.Default;
    }

    if (isModuleTypeNode(node)) {
        return ModuleMemberKind.Type;
    }

    if (isModuleInterfaceNode(node)) {
        return ModuleMemberKind.Interface;
    }

    if (isModuleEnumNode(node)) {
        return ModuleMemberKind.Enum;
    }

    if (isModuleFunctionNode(node)) {
        return ModuleMemberKind.Function;
    }

    if (isModuleVariableNode(node)) {
        return ModuleMemberKind.Variable;
    }

    return ModuleMemberKind.Unknown;
};