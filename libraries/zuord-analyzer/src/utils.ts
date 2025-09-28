import vscode from "vscode";
import { Node } from "ts-morph";

export function nodeToRange(node: Node): vscode.Range {
    const start = node.getStartLineNumber() - 1; // VSCode 0 tabanlı
    const startChar = node.getStart() - node.getPos(); // veya node.getStartLinePos()
    const end = node.getEndLineNumber() - 1;
    const endChar = node.getEnd() - node.getStart(); // approximate
    return new vscode.Range(start, startChar, end, endChar);
}

export function getKind(name: string): string | undefined {
    const parts = name.split(".");
    if (parts.length < 2) return undefined; // sondan ikinci yoksa
    return parts[parts.length - 2];
}

export function trimExtension(name: string): string {
    const parts = name.split(".");
    if (parts.length <= 2) return parts[0];
    return parts.slice(0, parts.length - 2).join("."); 
}