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
    if(name.endsWith(".zt") || name.endsWith(".ztype.ts")) return "ztype";
    if(name.endsWith(".zv") || name.endsWith(".zvariants.ts")) return "zvariants";
    return undefined;
}

export function getName(name: string): string {
    const parts = name.split(".");
    if (parts.length <= 2) return parts[0];
    return parts.slice(0, parts.length - 2).join("."); 
}