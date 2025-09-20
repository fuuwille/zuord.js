import { SyntaxKind, VariableStatement } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberSlot, ModuleRawMember } from "./moduleMember.model";
import { isModuleMemberEnumNode, isModuleMemberFunctionNode, isModuleMemberTypeNode, isModuleMemberVariableNode, isModuleMemberInterfaceNode, isModuleMemberModelNode, isModuleMemberVariantNode } from "./moduleMemberNode.variants";
import { ModuleMemberModelNode, ModuleMemberNode, ModuleMemberVariantNode } from "./moduleMemberNode.model";

export const initializeModuleMember = (
    node: ModuleMemberNode, resolve?: (member: ModuleRawMember) => void
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

export const extractModuleMember = (node: ModuleMemberNode) : ModuleMember => {
    if(isModuleMemberModelNode(node)) {
        return extractModuleModelMember(node);
    }

    if(isModuleMemberVariantNode(node)) {
        return extractModuleVariantMember(node);
    }

    throw new Error("Unknown module member node");
};

export const extractModuleModelMember = (node: ModuleMemberModelNode) : ModuleModelMember => {
    return initializeModuleMember(node) as ModuleModelMember;
};

export const extractModuleVariantMember = (node: ModuleMemberVariantNode) : ModuleVariantMember => {
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

            if (
                initializer?.isKind(SyntaxKind.ArrowFunction) ||
                initializer?.isKind(SyntaxKind.FunctionExpression)
            ) {
                member.slot = ModuleMemberSlot.Function;
            }
            else {
                member.slot = ModuleMemberSlot.Value;
            }
        }
    }) as ModuleVariantMember;
}

export const getModuleMemberKind = (node: ModuleMemberNode): ModuleMemberKind => {
    if (isModuleMemberTypeNode(node)) {
        return ModuleMemberKind.Type;
    }

    if (isModuleMemberInterfaceNode(node)) {
        return ModuleMemberKind.Interface;
    }

    if (isModuleMemberEnumNode(node)) {
        return ModuleMemberKind.Enum;
    }

    if (isModuleMemberFunctionNode(node)) {
        return ModuleMemberKind.Function;
    }

    if (isModuleMemberVariableNode(node)) {
        return ModuleMemberKind.Variable;
    }

    return ModuleMemberKind.Unknown;
};