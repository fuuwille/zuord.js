import { FunctionDeclaration, VariableDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration, VariableStatement } from "ts-morph";

export type ModuleDeclaration = 
    | ModuleModelDeclaration
    | ModuleVariantDeclaration;

export type ModuleModelDeclaration =
    | ModuleTypeDeclaration
    | ModuleInterfaceDeclaration
    | ModuleEnumDeclaration;

export type ModuleTypeDeclaration = TypeAliasDeclaration;

export type ModuleInterfaceDeclaration = InterfaceDeclaration;

export type ModuleEnumDeclaration = EnumDeclaration;

export type ModuleVariantDeclaration =
    | ModuleFunctionDeclaration
    | ModuleVariableDeclaration;

export type ModuleFunctionDeclaration = FunctionDeclaration;

export type ModuleVariableDeclaration = VariableDeclaration | VariableStatement;