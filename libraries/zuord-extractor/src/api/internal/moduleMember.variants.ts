import { ts, VariableStatement } from "ts-morph";
import { ModuleTypeLikeMember, ModuleMemberKind, ModuleMember, ModuleVariantLikeMember, ModuleMemberSlot, ModuleESMLikeMember, ModuleVariableMember, ModuleFunctionMember, ModuleEnumMember, ModuleInterfaceMember, ModuleTypeMember, ModuleExportMember, ModuleExportDefaultMember, ModuleExportLikeMember, ModuleImportMember, ModuleUnknownMember } from "./moduleMember.type";
import { isModuleEnumNode, isModuleFunctionNode, isModuleTypeNode, isModuleVariableNode, isModuleInterfaceNode, isModuleTypeLikeNode, isModuleVariantLikeNode, isModuleExportNode, isModuleExportDefaultNode, isModuleImportNode, isModuleESMLikeNode, isModuleFunctionAltNode } from "./moduleNode.variants";
import { ModuleTypeLikeNode, ModuleNode, ModuleVariantLikeNode } from "./moduleNode.type";

export const isUnknownMember = (member: ModuleMember): member is ModuleUnknownMember => {
    return member.kind === ModuleMemberKind.Unknown;
}

export const isModuleESMLikeMember = (member: ModuleMember): member is ModuleESMLikeMember => {
    return isModuleImportMember(member) || isModuleExportLikeMember(member);
}

export const isModuleImportMember = (member: ModuleMember): member is ModuleImportMember => {
    return member.kind === ModuleMemberKind.Import;
}

export const isModuleExportLikeMember = (member: ModuleMember): member is ModuleExportLikeMember => {
    return isModuleExportMember(member) || isModuleExportDefaultMember(member);
}

export const isModuleExportMember = (member: ModuleMember): member is ModuleExportMember => {
    return member.kind === ModuleMemberKind.Export;
}

export const isModuleExportDefaultMember = (member: ModuleMember): member is ModuleExportDefaultMember => {
    return member.kind === ModuleMemberKind.ExportDefault;
}

export const isModuleTypeLikeMember = (member: ModuleMember): member is ModuleTypeLikeMember => {
    return isModuleTypeMember(member) || isModuleInterfaceMember(member) || isModuleEnumMember(member);
}

export const isModuleTypeMember = (member: ModuleMember): member is ModuleTypeMember => {
    return member.kind === ModuleMemberKind.Type;
}

export const isModuleInterfaceMember = (member: ModuleMember): member is ModuleInterfaceMember => {
    return member.kind === ModuleMemberKind.Interface;
}

export const isModuleEnumMember = (member: ModuleMember): member is ModuleEnumMember => {
    return member.kind === ModuleMemberKind.Enum;
}

export const isModuleVariantLikeMember = (member: ModuleMember): member is ModuleVariantLikeMember => {
    return isModuleFunctionMember(member) || isModuleVariableMember(member);
}

export const isModuleFunctionMember = (member: ModuleMember): member is ModuleFunctionMember => {
    return member.kind === ModuleMemberKind.Function;
}

export const isModuleVariableMember = (member: ModuleMember): member is ModuleVariableMember => {
    return member.kind === ModuleMemberKind.Variable;
}

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

    if(isModuleESMLikeNode(node)) {
        return extractModuleESMLikeMember(node);
    }

    if(isModuleTypeLikeNode(node)) {
        return extractModuleTypeLikeMember(node);
    }

    if(isModuleVariantLikeNode(node)) {
        return extractModuleVariantLikeMember(node);
    }

    return initializeModuleMember(node);
};

export const extractModuleESMLikeMember = (node: ModuleNode) : ModuleESMLikeMember => {
    return initializeModuleMember(node);
};

export const extractModuleTypeLikeMember = (node: ModuleTypeLikeNode) : ModuleTypeLikeMember => {
    return initializeModuleMember(node, (member) => {
        member.id = node.getName();
    });
};

export const extractModuleVariantLikeMember = (node: ModuleVariantLikeNode) : ModuleVariantLikeMember => {
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
                if (isModuleFunctionAltNode(initializer)) {
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

    if (isModuleExportDefaultNode(node)) {
        return ModuleMemberKind.ExportDefault;
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