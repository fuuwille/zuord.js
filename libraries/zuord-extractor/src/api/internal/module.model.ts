export type Module = {
    models: ModuleModel[];
}

export interface ModuleNode {
    name: string;
}

export interface ModuleModel extends ModuleNode {
    variants: ModuleVariant[];
}

export interface ModuleVariant extends ModuleNode {

}