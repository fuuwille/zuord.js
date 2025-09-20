import { Node, SyntaxKind, VariableStatement } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberSlot } from "./moduleMember.model";
import { ModuleMemberNode } from "./moduleMemberNode.model";
import { isModuleMemberEnumNode, isModuleMemberFunctionNode, isModuleMemberTypeNode, isModuleMemberVariableNode, isModuleMemberInterfaceNode, isModuleMemberModelNode, isModuleMemberVariantNode } from "./moduleMemberNode.variants";

export const initializeModuleMember = (
    node: Node, resolve: (node: Node) => node is ModuleMemberNode
) : ModuleMember | null => {
    
    if(!resolve(node)) {
        return null;
    }

    const moduleMember = {
        node,
        kind: getModuleMemberKind(node)!
    } as ModuleMember;

    if(moduleMember.node instanceof VariableStatement) {
        const declaration = moduleMember.node.getDeclarations()[0];
        const initializer = declaration.getInitializer();

        if (
            initializer?.isKind(SyntaxKind.ArrowFunction) ||
            initializer?.isKind(SyntaxKind.FunctionExpression)
        ) {
            moduleMember.slot = ModuleMemberSlot.Function;
        }
        else {
            moduleMember.slot = ModuleMemberSlot.Value;
        }
    }

    return moduleMember;
}

export const extractModuleModelMember = (node: Node) : ModuleModelMember | null => {
    return initializeModuleMember(node, isModuleMemberModelNode) as ModuleModelMember;
};

export const extractModuleVariantMember = (node: Node) : ModuleVariantMember | null => {
    return initializeModuleMember(node, isModuleMemberVariantNode) as ModuleVariantMember;
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