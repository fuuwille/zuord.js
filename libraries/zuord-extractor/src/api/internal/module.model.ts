import { Node } from "ts-morph";

export type Module = {
    models: ModuleModel[];
}

export interface ModuleElement {
    node: Node;
    name: string;
}

export interface ModuleModel extends ModuleElement {
    variants: ModuleVariant[];
}

export interface ModuleVariant extends ModuleElement {

}