import { Node, SyntaxKind, VariableStatement } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberSlot } from "./moduleMember.model";
import { ModuleNode } from "./moduleNode.model";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleModelNode, isModuleVariantNode } from "./moduleNode.variants";

export const initializeModuleMember = (
    node: Node, resolve: (node: Node) => node is ModuleNode
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

        if (initializer?.isKind(SyntaxKind.ArrowFunction || SyntaxKind.FunctionExpression)) {
            moduleMember.slot = ModuleMemberSlot.Function;
        }
        else {
            moduleMember.slot = ModuleMemberSlot.Value;
        }
    }

    return moduleMember;
}

export const extractModuleModelMember = (node: Node) : ModuleModelMember | null => {
    return initializeModuleMember(node, isModuleModelNode) as ModuleModelMember;
};

export const extractModuleVariantMember = (node: Node) : ModuleVariantMember | null => {
    return initializeModuleMember(node, isModuleVariantNode) as ModuleVariantMember;
}

export const getModuleMemberKind = (node: Node): ModuleMemberKind | undefined => {
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

    return undefined;
};