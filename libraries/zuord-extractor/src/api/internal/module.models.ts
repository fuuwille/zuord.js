export type Module = {
    models: ModuleModel[];
}

export interface ModuleNode {
    name: string;
}

export interface ModuleModel extends ModuleNode {

}

export interface ModuleImpl extends ModuleNode {
    
}