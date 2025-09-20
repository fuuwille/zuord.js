import { Node } from "ts-morph";
import { ModuleNode, ModuleNodeKind, ModuleNodeCategory } from "./moduleNode.model";

export const extractModuleNode = (node: Node) : ModuleNode => {
    const source = node;
    const kind = ModuleNodeKind.Type;
    const category = ModuleNodeCategory.Model;

    return {
        source,
        kind,
        category,   
    };
};