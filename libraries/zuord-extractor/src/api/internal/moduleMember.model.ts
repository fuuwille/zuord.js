import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement } from "ts-morph";

export type ModuleMember = 
    | ModuleModelMember
    | ModuleVariantMember;

export type ModuleModelMember =
    | ModuleTypeMember
    | ModuleInterfaceMember
    | ModuleEnumMember;

export type ModuleTypeMember = TypeAliasDeclaration;

export type ModuleInterfaceMember = InterfaceDeclaration;

export type ModuleEnumMember = EnumDeclaration;

export type ModuleVariantMember =
    | ModuleFunctionMember
    | ModuleVariableMember;

export type ModuleFunctionMember = FunctionDeclaration;

export type ModuleVariableMember = VariableStatement;