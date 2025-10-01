import { ArrayLiteralExpression, AsExpression, AwaitExpression, BigIntLiteral, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseLiteral, Identifier, NewExpression, NonNullExpression, NoSubstitutionTemplateLiteral, NullLiteral, NumericLiteral, ObjectLiteralExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, SuperExpression, SyntaxKind, TemplateExpression, ThisExpression, TrueLiteral, TypeAssertion, YieldExpression } from "ts-morph";

export const valueSyntaxKind =
    SyntaxKind.NumericLiteral
    | SyntaxKind.BigIntLiteral
    | SyntaxKind.StringLiteral
    | SyntaxKind.TrueKeyword
    | SyntaxKind.FalseKeyword
    | SyntaxKind.NullKeyword
    | SyntaxKind.ObjectLiteralExpression
    | SyntaxKind.ArrayLiteralExpression
    | SyntaxKind.NoSubstitutionTemplateLiteral
    | SyntaxKind.TemplateExpression
    | SyntaxKind.Identifier
    | SyntaxKind.ThisKeyword
    | SyntaxKind.SuperKeyword
    | SyntaxKind.PropertyAccessExpression
    | SyntaxKind.ElementAccessExpression
    | SyntaxKind.CallExpression
    | SyntaxKind.NewExpression
    | SyntaxKind.PrefixUnaryExpression
    | SyntaxKind.PostfixUnaryExpression
    | SyntaxKind.BinaryExpression
    | SyntaxKind.ConditionalExpression
    | SyntaxKind.AsExpression
    | SyntaxKind.TypeAssertionExpression
    | SyntaxKind.NonNullExpression
    | SyntaxKind.AwaitExpression
    | SyntaxKind.YieldExpression;

export type ValueSyntaxNode =
    | NumericLiteral
    | BigIntLiteral
    | StringLiteral
    | TrueLiteral
    | FalseLiteral
    | NullLiteral
    | ObjectLiteralExpression
    | ArrayLiteralExpression
    | NoSubstitutionTemplateLiteral
    | TemplateExpression
    | Identifier
    | ThisExpression
    | SuperExpression
    | PropertyAccessExpression
    | ElementAccessExpression
    | CallExpression
    | NewExpression
    | PrefixUnaryExpression
    | PostfixUnaryExpression
    | BinaryExpression
    | ConditionalExpression
    | AsExpression
    | TypeAssertion
    | NonNullExpression
    | AwaitExpression
    | YieldExpression;