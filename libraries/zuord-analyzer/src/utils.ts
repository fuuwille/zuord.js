import vscode from "vscode";
import { Node, ts } from "ts-morph";

export function nodeToRange(node: Node, document: vscode.TextDocument): vscode.Range {
    const startOffset = node.getStart();
    const endOffset = node.getEnd();

    const startPos = document.positionAt(startOffset);
    const endPos = document.positionAt(endOffset);

    return new vscode.Range(startPos, endPos);
}

export function getKind(name: string): string | undefined {
    const parts = name.split(".");
    if (parts.length < 2) return undefined; // sondan ikinci yoksa
    return parts[parts.length - 2];
}

export function getName(name: string): string {
    const parts = name.split(".");
    if (parts.length <= 2) return parts[0];
    return parts.slice(0, parts.length - 2).join("."); 
}