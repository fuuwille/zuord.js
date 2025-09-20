import { Node } from "ts-morph";
import { ModuleNode, ModuleNodeKind } from "./moduleNode.model";

export const extractModuleNode = (node: Node) : ModuleNode => {
    const source = node;
    const kind = ModuleNodeKind.Model;

    return {
        source,
        kind,
    };
};