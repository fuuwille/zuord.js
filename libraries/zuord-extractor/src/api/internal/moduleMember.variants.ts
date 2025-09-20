import { Node, SyntaxKind, VariableStatement } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberSlot } from "./moduleMember.model";
import { isModuleMemberEnumNode, isModuleMemberFunctionNode, isModuleMemberTypeNode, isModuleMemberVariableNode, isModuleMemberInterfaceNode, isModuleMemberModelNode, isModuleMemberVariantNode } from "./moduleMemberNode.variants";

export const initializeModuleMember = (
    node: Node, resolve: (member: ModuleMember) => void
) : ModuleMember => {

    const moduleMember = {
        node,
        kind: getModuleMemberKind(node)!
    } as ModuleMember;

    resolve(moduleMember);
    return moduleMember;
}

export const extractModuleModelMember = (node: Node) : ModuleModelMember => {
    return initializeModuleMember(node, () => {}) as ModuleModelMember;
};

export const extractModuleVariantMember = (node: Node) : ModuleVariantMember => {
    return initializeModuleMember(node, (member) => {
        if(member.node instanceof VariableStatement) {
            const declarations = member.node.getDeclarations();

            if(declarations.length != 1) {
                throw new Error();
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

export const getModuleMemberKind = (node: Node): ModuleMemberKind | undefined => {
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

    return undefined;
};