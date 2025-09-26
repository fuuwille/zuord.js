import { ts, VariableStatement } from "ts-morph";
import { ModuleModelMember, ModuleMemberKind, ModuleMember, ModuleVariantMember, ModuleMemberSlot, ModuleESMMember } from "./moduleMember.model";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleModelNode, isModuleVariantNode, isModuleExportNode, isModuleDefaultNode, isModuleImportNode, isModuleESMNode, isModuleFunctionLikeNode } from "./moduleNode.variants";
import { ModuleModelNode, ModuleNode, ModuleVariantNode } from "./moduleNode.model";

export const initializeModuleMember = <TMember extends ModuleMember>(
    node: ModuleNode, resolve?: (member: TMember) => void
) : TMember => {

    const moduleMember : ModuleMember = {
        node,
        kind: getModuleMemberKind(node),
        errors: []
    };

    resolve?.(moduleMember as TMember);

    if(moduleMember.errors!.length == 0) {
        delete moduleMember.errors;
    }

    return moduleMember as TMember;
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
    return initializeModuleMember(node);
};

export const extractModuleModelMember = (node: ModuleModelNode) : ModuleModelMember => {
    return initializeModuleMember(node, (member) => {
        member.id = node.getName();
    });
};

export const extractModuleVariantMember = (node: ModuleVariantNode) : ModuleVariantMember => {
    return initializeModuleMember(node, (member) => {
        if(member.node instanceof VariableStatement) {
            const declarations = member.node.getDeclarations();

            if(declarations.length == 0) {
                member.errors!.push("VariableStatement has no declaration");
                return;
            }

            if(declarations.length > 1) {
                member.errors!.push("VariableStatement must have exactly one declaration");
            }

            const declaration = declarations[0];
            const initializer = declaration.getInitializer();

            if(initializer) {
                if (isModuleFunctionLikeNode(initializer)) {
                    member.slot = ModuleMemberSlot.Function;

                    const returnType = initializer.getReturnType();
                    const constraint = returnType.getConstraint();

                    const symbol = constraint 
                        ? constraint.getSymbol()
                        : returnType.getSymbol();

                    if (symbol) {
                        member.target = symbol.getName();
                    }
                    else {
                        const compilerNode = initializer.compilerNode;
                        const typeNode = compilerNode.type;

                        if(typeNode && ts.isTypePredicateNode(typeNode)) {
                            member.target = typeNode.getText();
                        }
                        else {
                            member.errors!.push("Could not resolve model");
                        }
                    }
                }
                else {
                    member.slot = ModuleMemberSlot.Value;
                }
            }
            else {
                member.errors!.push("VariableStatement has no initializer");
            }
        }
    });
}

export const getModuleMemberKind = (node: ModuleNode): ModuleMemberKind => {
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